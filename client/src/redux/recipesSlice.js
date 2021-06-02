import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getSpoonRecipesAsync = createAsyncThunk(
  'recipes/getSpoonRecipesAsync',
  async (list) => {
    const ingredients = list.join(",+");
    let recipes = [];
    await axios
      .get("spoontacular", { params: { ingredients } })
      .then(({ data }) => {recipes = data})
      .catch(err => console.log('getSpoonRecipes.js -- err:', err));

    return {recipes}
  }
)

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    recipes: []
  },
  extraReducers: {
    [getSpoonRecipesAsync.fulfilled]: (state,action) => {
      return action.payload.recipes
    }
  }
})

export default recipesSlice.reducer;