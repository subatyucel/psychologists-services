function SvgIcon({ className = "", icon = "", ...props }) {
  return (
    <svg className={className} {...props}>
      <use xlinkHref={`/sprite.svg#${icon}`}></use>
    </svg>
  );
}

export default SvgIcon;
