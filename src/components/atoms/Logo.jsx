import { Link } from "react-router";

function Logo({ spanClass = "", linkClass = "" }) {
  return (
    <Link to="/" className={linkClass}>
      {/* <img
        src="/logo.svg"
        alt="psychologists services logo"
        className={className}
      /> */}
      <span className={spanClass}>psychologists.</span>services
    </Link>
  );
}

export default Logo;
