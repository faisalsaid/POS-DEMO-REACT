import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// fetch data all menu from API

export const fetchAllMenu = createAsyncThunk('menu/fetchAllMenu', (data) => {
  const filter = data === 'all' ? '' : `?category=${data}`;
  return axios.get(`${process.env.REACT_APP_API_SOURCE}menu${filter}`).then((resp) => resp.data);
});

export const postMenu = createAsyncThunk('menu/postMenu', (payload) => {
  console.log('from slice', { payload });
  return axios.post(`${process.env.REACT_APP_API_SOURCE}menu`, payload).then((resp) => resp.data);
});

const initialState = {
  menu: { isloading: false, data: [], error: '' },
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    testingMenu: (state, action) => {
      console.log('testingMenu', action.payload);
    },
  },

  extraReducers: (builder) => {
    // get all menu
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

    // post a menu
    builder.addCase(postMenu.pending, (state, { payload }) => {
      console.log('postMenu.pending');
    });
    builder.addCase(postMenu.fulfilled, (state, { payload }) => {
      console.log('postMenu.fulfilled');
    });
    builder.addCase(postMenu.rejected, (state, action) => {
      console.log('postMenu.rejected');
    });
  },
});

export const { testingMenu } = menuSlice.actions;
export default menuSlice.reducer;
