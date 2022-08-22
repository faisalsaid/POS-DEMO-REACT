import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../feature/menu/menuSlice';

export const store = configureStore({
  reducer: { menu: menuReducer },
});
