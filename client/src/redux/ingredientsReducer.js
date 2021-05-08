import { createSlice } from '@reduxjs/toolkit';

const ingredientsList = new Set();
const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState: {
    ingredientsList 
  },
  reducers: {
    addIngredient: (state, { payload }) => {
      state.ingredientsList.add(payload);
    },
    deleteIngredient: (state, { payload }) => {
      state.ingredientsList.delete(payload);
    }
  }
});

export const { addIngredient, deleteIngredient } = ingredientsSlice.actions;
export default ingredientsSlice.reducer;
