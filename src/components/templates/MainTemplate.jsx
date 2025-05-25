import { Outlet } from "react-router";
import Navbar from "../organisms/Navbar";
import ToggleMenu from "../organisms/ToggleMenu";
import { useState } from "react";

function MainTemplate() {
  const [toggleMenu, setToggleMenu] = useState(true);
  return (
    <>
      <header>
        <Navbar setToggleMenu={setToggleMenu} />
      </header>
      <main>
        {toggleMenu && <ToggleMenu setToggleMenu={setToggleMenu} />}
        {!toggleMenu && <Outlet />}
      </main>
    </>
  );
}

export default MainTemplate;
