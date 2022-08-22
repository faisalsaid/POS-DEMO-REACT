import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// fetch data all menu from API

export const fetchAllMenu = createAsyncThunk('menu/fetchAllMenu', () => {
  return axios.get('http://localhost:3004/menu').then((resp) => resp.data);
});

const initialState = {
  menu: { isloading: false, data: [], error: '' },
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllMenu.pending, (state, { payload }) => {
      state.menu.isloading = true;
    });
    builder.addCase(fetchAllMenu.fulfilled, (state, { payload }) => {
      state.menu.isloading = false;
      state.menu.data = payload;
      state.menu.error = '';
    });
    builder.addCase(fetchAllMenu.rejected, (state, action) => {
      state.menu.isloading = false;
      state.menu.data = [];
      state.menu.error = action.error.message;
    });
  },
});

export default menuSlice.reducer;
