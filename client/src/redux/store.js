import { configureStore } from "@reduxjs/toolkit";

import ingredientsReducer from "./ingredientsSlice";
import recipesReducer from './recipesSlice'

export default configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    recipes: recipesReducer
  },
});
