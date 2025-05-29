import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  isToggleMenuOpen: false,
  isLoginModalOpen: false,
  isRegisterModalOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    openToggleMenu() {
      return {
        ...initialState,
        isToggleMenuOpen: true,
      };
    },
    openLoginModal() {
      return {
        ...initialState,
        isLoginModalOpen: true,
      };
    },
    openRegisterModal() {
      return {
        ...initialState,
        isRegisterModalOpen: true,
      };
    },

    resetUi() {
      return initialState;
    },
  },
});

export const {
  setLoading,
  openToggleMenu,
  openLoginModal,
  openRegisterModal,
  resetUi,
} = uiSlice.actions;

export default uiSlice.reducer;
