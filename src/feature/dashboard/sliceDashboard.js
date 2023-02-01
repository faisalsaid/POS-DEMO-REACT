import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllOmset = createAsyncThunk('dashboard/fetchAllOmset', (data) => {
  return axios.get(`${process.env.REACT_APP_API_SOURCE}order`).then((resp) => resp.data);
});

const toDay = new Date();

const initialState = {
  dashboard: {
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
      state.dashboard.isLoading = true;
    });
    builder.addCase(fetchAllOmset.fulfilled, (state, { payload }) => {
      // console.log({ payload });
      state.dashboard.isLoading = false;
      state.dashboard.data = {
        barData: payload.filter((data) => data.isPaidOff === true).map((data) => ({ customer: data.customer, finalPrice: data.finalPrice })),
        totalEarnings: payload
          .filter((data) => data.isPaidOff === true)
          .map((data) => data.finalPrice)
          .reduce((acc, curr) => acc + curr),
        saleItems: payload.map((data) => data.listOrder.map((data) => data.quantity).reduce((acc, curr) => acc + curr)).reduce((acc, curr) => acc + curr),
      };
      state.dashboard.error = '';
    });
    builder.addCase(fetchAllOmset.rejected, (state, action) => {
      state.dashboard.isLoading = false;
      state.dashboard.data = [];
      state.dashboard.error = action.error.message;
    });
    // HANDLE OMSET END
  },
});

export default dashboardSlice.reducer;
