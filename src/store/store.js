import { configureStore } from '@reduxjs/toolkit';
import mainLayoutSlice from '../components/layout/sliceMainLayout';
import sliceOrder from '../feature/order/sliceOrder';

export const store = configureStore({
  reducer: { mainLayout: mainLayoutSlice, order: sliceOrder },
});
