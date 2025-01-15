import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
  isCartOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
      state.isCartOpen = false;
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
      state.isMenuOpen = false;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu, toggleCart, closeMenu } = uiSlice.actions;
export default uiSlice.reducer;