import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  psychologist: [],
};

const psychologistSlice = createSlice({
  name: "psychologist",
  initialState,
  reducers: {
    addPsychologist(state, action) {
      state.psychologist = [...state.psychologist, ...action.payload];
    },
    setPsychologist(state, action) {
      state.psychologist = action.payload;
    },
    clearPsychologist() {
      return initialState;
    },
  },
});

export const { addPsychologist, setPsychologist, clearPsychologist } =
  psychologistSlice.actions;
export default psychologistSlice.reducer;
