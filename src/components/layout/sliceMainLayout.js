import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  drawerOpen: false,
};

export const mainLayoutSlice = createSlice({
  name: 'main_layout',
  initialState,
  reducers: {
    setOpenDrawer: (state, action) => {
      state.drawerOpen = !state.drawerOpen;
      console.log(action.payload);
      console.log(state.drawerOpen);
    },
  },
});

export const { setOpenDrawer } = mainLayoutSlice.actions;
export default mainLayoutSlice.reducer;
