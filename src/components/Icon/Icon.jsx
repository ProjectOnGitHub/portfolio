import React from 'react';
import './_Icon.scss';
import Icons from '../../svg/sprite.svg';

function Icon({ name, className, modificator }) {
  const svgClassName = modificator
    ? `icon icon__${className} icon__${className}_${modificator}`
    : `icon icon__${className}`;

  return (
    <svg className={`icon icon__${svgClassName} `}>
      <use xlinkHref={`${Icons}#${name}-icon`} />
    </svg>
  );
}

export default Icon;
