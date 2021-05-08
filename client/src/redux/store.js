import { configureStore } from '@reduxjs/toolkit';

import ingredientsReducer from './ingredientsReducer';

export default configureStore({
  reducer: {
    ingredients: ingredientsReducer
  },
})