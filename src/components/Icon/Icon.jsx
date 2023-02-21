import React from 'react';
import './_Icon.scss';
import Icons from '../../svg/sprite.svg';

function Icon({ name, className }) {
  return (
    <svg className={`icon icon__${className} icon__${className}_${name}`}>
      <use xlinkHref={`${Icons}#${name}-icon`} />
    </svg>
  );
}

export default Icon;
