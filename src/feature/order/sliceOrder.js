import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orderMenuList: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
});

export default orderSlice.reducer;
