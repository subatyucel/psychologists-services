import Logo from "../atoms/Logo";
import SvgIcon from "../atoms/SvgIcon";
import NavButtonList from "../molecules/NavButtonList";
import NavLinkList from "../molecules/NavLinkList";
import useEscClose from "../../hooks/useEscClose";

function ToggleMenu({ setToggleMenu }) {
  useEscClose(() => setToggleMenu(false));
  return (
    <nav className="absolute top-0 flex h-dvh w-dvw flex-col items-center justify-center gap-5 bg-light text-xl">
      <SvgIcon
        icon="x"
        className="absolute top-8 right-8 size-8"
        onClick={() => setToggleMenu(false)}
      />
      <Logo linkClass="text-2xl font-bold" spanClass="text-primary-200" />
      <NavLinkList className="flex flex-col items-center" />
      <NavButtonList className="flex flex-col items-center" />
    </nav>
  );
}

export default ToggleMenu;
