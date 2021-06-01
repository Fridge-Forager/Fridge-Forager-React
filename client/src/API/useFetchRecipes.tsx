import {useState} from 'react';
import axios from 'axios';

const useFetchRecipes = (list: string[]) => {
  const [recipeData, setData] = useState([]);

  async function load(list: string[]) {
    await axios
      .get("spoontacular", { params: { ingredients: list } })
      .then(({ data }) => setData(data))
      .catch(err => console.log('useFetchRecipes.js -- err:', err))
  }
  return [recipeData, load];
};

export default useFetchRecipes;