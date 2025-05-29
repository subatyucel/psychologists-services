import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import userReducer from "./userSlice";
import psychologistReducer from "./psychologistSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
    psychologist: psychologistReducer,
  },
});

export default store;
