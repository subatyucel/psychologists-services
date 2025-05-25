import { useState } from "react";
import SvgIcon from "../atoms/SvgIcon";

function PasswordInput({ register }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleEye = () => {
    setShowPassword((val) => !val);
  };

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        {...register("password")}
        className={`w-full rounded-2xl border border-dark/10 p-4 placeholder:text-dark`}
        placeholder="Password"
      />
      <SvgIcon
        icon={`eye-${showPassword ? "on" : "off"}`}
        onClick={handleEye}
        className="absolute top-1/2 right-4 size-5 -translate-y-1/2 cursor-pointer"
      />
    </div>
  );
}

export default PasswordInput;
