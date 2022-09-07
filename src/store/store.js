import { configureStore } from '@reduxjs/toolkit';
import mainLayoutSlice from '../components/layout/sliceMainLayout';

export const store = configureStore({
  reducer: { mainLayout: mainLayoutSlice },
});
