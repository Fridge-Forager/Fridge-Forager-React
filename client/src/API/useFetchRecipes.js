import React, {useState} from 'react';
import axios from "axios";

const useFetchRecipes = (list) => {
  const [recipeData, setData] = useState([]);

  async function load(list) {
    axios
      .get("spoontacular", { params: { ingredients: list } })
      .then(({ data }) => setData(data))
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
    });
  }

  return [recipeData, load];
};

export default useFetchRecipes;