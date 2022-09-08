import { configureStore } from '@reduxjs/toolkit';
import mainLayoutSlice from '../components/layout/sliceMainLayout';
import menuReducer from '../feature/menu/menuSlice';

export const store = configureStore({
  reducer: { menu: menuReducer, mainLayout: mainLayoutSlice },
});
