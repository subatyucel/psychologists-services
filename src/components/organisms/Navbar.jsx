import Logo from "../atoms/Logo";
import NavButtonList from "../molecules/NavButtonList";
import NavLinkList from "../molecules/NavLinkList";
import SvgIcon from "../atoms/SvgIcon";
import { openToggleMenu } from "../../redux/uiSlice";
import { useDispatch } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();

  return (
    <nav className="flex items-center justify-around border-b border-dark/10 py-6">
      <Logo
        linkClass="text-base lg:text-xl font-bold"
        spanClass="text-primary-200"
      />
      <NavLinkList className="hidden md:flex" />
      <NavButtonList className="hidden md:flex" />
      <SvgIcon
        onClick={() => dispatch(openToggleMenu())}
        icon="burger"
        className="size-6 md:hidden"
      />
    </nav>
  );
}

export default Navbar;
