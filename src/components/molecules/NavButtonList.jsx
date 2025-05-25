import PillButton from "../atoms/PillButton";

function NavButtonList({ className = "", loggedIn = false }) {
  return (
    <ul className={`gap-2 ${className}`}>
      {!loggedIn && (
        <>
          <li key="login">
            <PillButton
              type="transparent"
              className="px-5 py-2 lg:px-10 lg:py-3.5"
            >
              Login
            </PillButton>
          </li>

          <li key="registration">
            <PillButton type="colored" className="px-5 py-2 lg:px-10 lg:py-3.5">
              Registration
            </PillButton>
          </li>
        </>
      )}
    </ul>
  );
}

export default NavButtonList;
