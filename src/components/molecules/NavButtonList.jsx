import PillButton from "../atoms/PillButton";
import { useDispatch } from "react-redux";
import { openRegisterModal, openLoginModal } from "../../redux/uiSlice";

function NavButtonList({ className = "", loggedIn = false }) {
  const dispatch = useDispatch();
  return (
    <ul className={`gap-2 ${className}`}>
      {!loggedIn && (
        <>
          <li key="login">
            <PillButton
              type="transparent"
              className="px-5 py-2 lg:px-10 lg:py-3.5"
              onClick={() => dispatch(openLoginModal())}
            >
              Login
            </PillButton>
          </li>

          <li key="registration">
            <PillButton
              type="colored"
              className="px-5 py-2 lg:px-10 lg:py-3.5"
              onClick={() => dispatch(openRegisterModal())}
            >
              Registration
            </PillButton>
          </li>
        </>
      )}
    </ul>
  );
}

export default NavButtonList;
