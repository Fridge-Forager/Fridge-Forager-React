require("dotenv").config();
const express = require("express");
const axios = require("axios");
const path = require("path");

const DIST_DIR = path.resolve(__dirname, "..", "client", "dist");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(DIST_DIR));

async function populateRecipeIdUrl(spoonacularData, recipeIds) {
  for (let i = 0; i < spoonacularData.length; i += 1) {
    const currentRecipe = spoonacularData[i];
    recipeIds.push(
      `https://api.spoonacular.com/recipes/${currentRecipe.id}/information?`
    );
  }
}

app.get("/spoontacular", (req, res) => {
  const recipeIds = [];
  let { ingredients } = req.query;
  let iParams = ingredients.map((ingredient, idx) => {
    if (idx !== 0) return (ingredient = "+" + ingredient);
    return ingredient;
  });
  iParams = iParams.toString();
  const findByIngredientsUrl =
    "https://api.spoonacular.com/recipes/findByIngredients?";
  const findByIngredientsParam = {
    apiKey: process.env.SPOONTACULAR_APIKEY,
    ingredients: iParams,
    number: 2,
  };

  const recipeByIdParams = {
    apiKey: process.env.SPOONTACULAR_APIKEY,
    includeNutrition: false,
  };

  axios
    .get(findByIngredientsUrl, { params: findByIngredientsParam })
    .then(({ data }) => {
      populateRecipeIdUrl(data, recipeIds);
    })
    .then(async () => {
      try {
        let promiseArray = recipeIds.map((idUrl) =>
          axios.get(idUrl, { params: recipeByIdParams })
        );
        let response = await Promise.all(promiseArray.map((e) => e));
        let data = response.map((resp) => resp.data);
        data = data.reduce((acc, curr) => {
          acc.push({
            title: curr.title,
            image: curr.image,
            url: curr.sourceUrl,
          });
          return acc;
        }, []);
        res.status(200).send(data);
      } catch {
        throw Error("promise failed");
      }
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/spoontacular:id", (req, res) => {
  res.send(req.params);
});

module.exports = app;

// https://api.spoonacular.com/recipes/{id}/information?includeNutrition=false
