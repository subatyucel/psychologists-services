import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetUi } from "../redux/uiSlice";

function useEscClose() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") dispatch(resetUi());
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [dispatch]);
}

export default useEscClose;
