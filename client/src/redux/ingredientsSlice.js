import { createSlice } from "@reduxjs/toolkit";

const ingredients = new Set();
const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState: {
    ingredients,
  },
  reducers: {
    addIngredient: (state, { payload }) => {
      state.ingredientsList.add(payload);
    },
    deleteIngredient: (state, { payload }) => {
      state.ingredientsList.delete(payload);
    },
  },
});

export const {
  addNewIngredient,
  deleteExistingIngredient,
} = ingredientsSlice.actions;
export default ingredientsSlice.reducer;
