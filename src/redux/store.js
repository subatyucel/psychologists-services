import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import interfaceReducer from "./interfaceSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    interface: interfaceReducer,
  },
});

export default store;
