import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllMenu = createAsyncThunk('order/fetchAllMenu', (data) => {
  const filter = data === 'all' ? '' : `?category=${data}`;
  return axios.get(`${process.env.REACT_APP_API_SOURCE}menu${filter}`).then((resp) => resp.data);
});

export const fetchAllOrder = createAsyncThunk('order/fetchAllOrder', (data) => {
  // const filter = data === 'all' ? '' : `?category=${data}`;
  return axios.get(`${process.env.REACT_APP_API_SOURCE}order`).then((resp) => resp.data);
});

const initialState = {
  menu: {
    isLoading: false,
    data: [],
    error: '',
  },
  listOrder: [],
  orders: {
    isLodaing: false,
    data: [],
    error: '',
  },
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    // HANDLE listOrder
    addListOrder: (state, { payload }) => {
      state.listOrder = [...state.listOrder, { item: payload, quantity: 1, total: payload.price }];
    },
    removeListOrder: (state, { payload }) => {
      state.listOrder.splice(payload, 1);
    },
    resetListOder: (state) => {
      state.listOrder = [];
    },
    addQuantity: (state, { payload }) => {
      state.listOrder[payload].quantity++;
      state.listOrder[payload].total = state.listOrder[payload].item.price * state.listOrder[payload].quantity;
    },
    bateQuantity: (state, { payload }) => {
      state.listOrder[payload].quantity > 1 && state.listOrder[payload].quantity--;
      state.listOrder[payload].total = state.listOrder[payload].item.price * state.listOrder[payload].quantity;
    },
    // HANDLE listOrder END
  },

  extraReducers: (builder) => {
    // HANDLE MENU
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
    // HANDLE MENU END

    // HANDLE ORDER
    builder.addCase(fetchAllOrder.pending, (state, action) => {
      state.orders.isLoading = true;
    });
    builder.addCase(fetchAllOrder.fulfilled, (state, { payload }) => {
      state.orders.isLoading = false;
      state.orders.data = payload;
      state.orders.error = '';
    });
    builder.addCase(fetchAllOrder.rejected, (state, action) => {
      state.orders.isLoading = false;
      state.orders.data = [];
      state.orders.error = action.error.message;
    });
  },

  // HANDLE ORDER END
});

export const { addListOrder, addQuantity, bateQuantity, resetListOder, removeListOrder } = orderSlice.actions;
export default orderSlice.reducer;
