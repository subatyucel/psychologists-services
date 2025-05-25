import { NavLink } from "react-router";

function NavLinkList({ className = "" }) {
  return (
    <ul className={`gap-5 lg:gap-10 ${className}`}>
      <li key="home">
        <NavLink to="/" className="">
          Home
        </NavLink>
      </li>

      <li key="psychologists">
        <NavLink to="/psychologists">Psychologists</NavLink>
      </li>

      <li key="favorites">
        <NavLink to="/favorites">Favorites</NavLink>
      </li>
    </ul>
  );
}

export default NavLinkList;
