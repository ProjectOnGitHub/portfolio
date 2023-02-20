import React from 'react';
import './_Logo.scss';

function Logo(props) {
  return (
    <a href='/' className={`${props.className}`}>
      <span className={`${props.className}__left-char`}>A</span>
      <span className={`${props.className}__right-char`}>V</span>
    </a>
  );
}

export default Logo;
