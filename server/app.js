require("dotenv").config();
const express = require("express");
const axios = require("axios");
const path = require("path");

const DIST_DIR = path.resolve(__dirname, "..", "client", "dist");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(DIST_DIR));

async function populateRecipeId(spoonacularData, recipeIds) {
  for (let i = 0; i < spoonacularData.length; i += 1) {
    const currentRecipe = spoonacularData[i];
    recipeIds.push(currentRecipe.id);
  }
}

app.get("/spoontacular", (req, res) => {
  const recipeIds = [];
  const promiseArray = [];
  const recipes = [];
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

  axios
    .get(findByIngredientsUrl, { params: findByIngredientsParam })
    .then(({ data }) => {
      populateRecipeId(data, recipeIds);
    })
    .then(
      () => { 
        promiseArray = recipeIds.map((id) => {
      const recipeByIdUrl = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false`
      return axios.get(recipeByIdUrl)
      })
    })
    .then(() => res.send(Promise.all(promiseArray.map())))
    .catch((error) => {
      res.send("spoontacular fail");
    });
});

app.get("/spoontacular:id", (req, res) => {
  res.send(req.params);
});

module.exports = app;


// https://api.spoonacular.com/recipes/{id}/information?includeNutrition=false