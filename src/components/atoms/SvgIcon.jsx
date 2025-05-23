function SvgIcon({ cssClass = "", icon }) {
  return (
    <svg className={cssClass}>
      <use xlinkHref={`/sprite.svg#${icon}`}></use>
    </svg>
  );
}

export default SvgIcon;
