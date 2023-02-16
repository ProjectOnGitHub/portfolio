import React from "react";
import './_Icon.scss';
import Icons from "../../svg/sprite.svg";

function Icon({ name }) {
  return (
    <svg className={`icon icon__${name}`}>
      <use xlinkHref={`${Icons}#${name}-icon`} />
    </svg>
  )
}

export default Icon;