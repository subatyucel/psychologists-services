import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  isToggleMenuOpen: false,
  isLoginModalOpen: false,
  isRegisterModalOpen: false,
};

const interfaceSlice = createSlice({
  name: "interface",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setIsToggleMenuOpen(state, action) {
      state.isToggleMenuOpen = action.payload;
    },
    setIsLoginModalOpen(state, action) {
      state.isLoginModalOpen = action.payload;
    },
    setIsRegisterModalOpen(state, action) {
      state.isRegisterModalOpen = action.payload;
    },
  },
});

export const {
  setLoading,
  setIsToggleMenuOpen,
  setIsLoginModalOpen,
  setIsRegisterModalOpen,
} = interfaceSlice.actions;

export default interfaceSlice.reducer;
