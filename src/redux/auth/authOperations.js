import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { setLoading } from "../interfaceSlice";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setLoading(true));
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password,
      );

      const user = userCredential.user;
      await updateProfile(user, {
        displayName: userData.name,
      });
    } catch (error) {
      return rejectWithValue(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  },
);
