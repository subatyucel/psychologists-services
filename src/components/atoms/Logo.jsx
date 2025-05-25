import { Link } from "react-router";

function Logo({ spanClass = "", linkClass = "" }) {
  return (
    <Link to="/" className={linkClass}>
      <span className={spanClass}>psychologists.</span>services
    </Link>
  );
}

export default Logo;
