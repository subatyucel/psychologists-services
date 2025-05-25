function PillButton({ className = "", children, type = "colored", ...props }) {
  return (
    <button
      className={`cursor-pointer rounded-full border ${type === "colored" ? "bg-primary-200 text-light hover:bg-primary-300" : "hover:text-primary-200"} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
export default PillButton;
