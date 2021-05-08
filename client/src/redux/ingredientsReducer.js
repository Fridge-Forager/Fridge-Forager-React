import { createSlice } from '@reduxjs/toolkit';

const ingredientsList = new Set();
const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState: {
    ingredientsList 
  },
  reducers: {
    addIngredient: (state, action) => {
      state.ingredientsList.add(action.payload);
    },
  }
});

export const { addIngredient } = ingredientsSlice.actions;
export default ingredientsSlice.reducer;
