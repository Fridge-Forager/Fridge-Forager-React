require('dotenv').config()
const express = require("express");
const axios = require("axios");
const path = require("path");

const DIST_DIR = path.resolve(__dirname, "..", "client", "dist");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(DIST_DIR));

function populateRecipeId(spoonacularData, recipeIds) {
  for (let i = 0; i < spoonacularData.length; i += 1) {
    const currentRecipe = spoonacularData[i]
    recipeIds.push(currentRecipe.id)
  }
}

app.get('/spoontacular', (req, res) => {
  const recipeIds = [];
  let { ingredients } = req.query;
  
  ingredients = ingredients.replace(/ /g, '+')
  const findByIngredientsUrl = 'https://api.spoonacular.com/recipes/findByIngredients?';
  const findByIngredientsParam = {
    apiKey: process.env.SPOONTACULAR_APIKEY,
    ingredients,
    number: 2
  }

  axios.get(findByIngredientsUrl,{ params: findByIngredientsParam})
    .then((response) => {
      const { data } = response;
      populateRecipeId(data, recipeIds);
    })
    .catch(error => {
      res.send('spoontacular fail')
    })
})

module.exports = app;
