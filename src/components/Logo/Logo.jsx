import React from 'react';
import './_Logo.scss';
import LogoIcon from '../../svg/sprite.svg';

function Logo({ name, className }) {
  return (
    <svg className={`logo logo_${className}`}>
      <use xlinkHref={`${LogoIcon}#${name}-icon`} />
    </svg>
  );
}

export default Logo;
