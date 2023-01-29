import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllOmset = createAsyncThunk('dashboard/fetchAllOmset', (data) => {
  return axios.get(`${process.env.REACT_APP_API_SOURCE}order`).then((resp) => resp.data);
});

const initialState = {
  omset: {
    isLoading: false,
    data: [],
    error: '',
  },
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // HANDLE OMSET
    builder.addCase(fetchAllOmset.pending, (state, action) => {
      state.omset.isLoading = true;
    });
    builder.addCase(fetchAllOmset.fulfilled, (state, { payload }) => {
      state.omset.isLoading = false;
      state.omset.data = payload;
      state.omset.error = '';
    });
    builder.addCase(fetchAllOmset.rejected, (state, action) => {
      state.omset.isLoading = false;
      state.omset.data = [];
      state.omset.error = action.error.message;
    });
    // HANDLE OMSET END
  },
});

export default dashboardSlice.reducer;
