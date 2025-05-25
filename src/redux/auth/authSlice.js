import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./authOperations";

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.loading;
    });
  },
});

export default authSlice.reducer;
