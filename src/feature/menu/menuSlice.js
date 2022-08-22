import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menu: [],
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    fetchMenuAPI: (state, action) => {},
  },
});

export const { fetchMenuAPI } = menuSlice.actions;
export default menuSlice.reducer;