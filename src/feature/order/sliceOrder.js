import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllMenu = createAsyncThunk('order/fetchAllMenu', (data) => {
  const filter = data === 'all' ? '' : `?category=${data}`;
  return axios.get(`${process.env.REACT_APP_API_SOURCE}menu${filter}`).then((resp) => resp.data);
});

const initialState = {
  menu: {
    isLoading: false,
    data: [],
    error: '',
  },
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllMenu.pending, (state, action) => {
      state.menu.isLoading = true;
    });
    builder.addCase(fetchAllMenu.fulfilled, (state, { payload }) => {
      state.menu.isLoading = false;
      state.menu.data = payload;
      state.menu.error = '';
    });
    builder.addCase(fetchAllMenu.rejected, (state, action) => {
      state.menu.isLoading = false;
      state.menu.data = [];
      state.menu.error = action.error.message;
    });
  },
});

export default orderSlice.reducer;
