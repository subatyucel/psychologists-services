import { Outlet } from "react-router";
import Navbar from "../organisms/Navbar";

function MainTemplate() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainTemplate;
