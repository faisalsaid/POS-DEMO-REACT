import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  drawerOpen: false,
};

export const mainLayoutSlice = createSlice({
  name: 'main_layout',
  initialState,
  reducers: {
    // testingMenu: (state, action) => {
    //   console.log('testingMenu', action.payload);
    // },
    openDrawer: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { openDrawer } = mainLayoutSlice.actions;
export default mainLayoutSlice.reducer;
