import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../redux/uiSlice";
import { setUser } from "../redux/userSlice";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase";
import toast from "react-hot-toast";
import beautifyFirebaseError from "../utils/beautifyFirebaseError";

export const useRegister = () => {
  const dispatch = useDispatch();

  const registerUser = useCallback(
    async ({ name, email, password }) => {
      try {
        dispatch(setLoading(true));

        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );

        await updateProfile(user, { displayName: name });
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          }),
        );
      } catch (error) {
        toast.error(beautifyFirebaseError(error.code));
      } finally {
        dispatch(setLoading(false));
      }
    },
    [dispatch],
  );

  return registerUser;
};
