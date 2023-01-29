import { configureStore } from '@reduxjs/toolkit';
import mainLayoutSlice from '../components/layout/sliceMainLayout';
import sliceOrder from '../feature/order/sliceOrder';
import menuReducer from '../feature/menu/menuSlice';
import sliceDashboard from '../feature/dashboard/sliceDashboard';

export const store = configureStore({
  reducer: { mainLayout: mainLayoutSlice, order: sliceOrder, menu: menuReducer, dashboard: sliceDashboard },
});
