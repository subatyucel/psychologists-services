import { Outlet } from "react-router";
import Navbar from "../organisms/Navbar";
import ToggleMenu from "../organisms/ToggleMenu";
import { useState } from "react";
import RegisterModal from "../organisms/RegisterModal";

function MainTemplate() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <header>
        <Navbar setToggleMenu={setToggleMenu} />
      </header>
      <main>
        <RegisterModal />
        {toggleMenu && <ToggleMenu setToggleMenu={setToggleMenu} />}
        {!toggleMenu && <Outlet />}
      </main>
    </>
  );
}

export default MainTemplate;
