import React from 'react';
import './_Logo.scss';

function Logo(props) {
  return (
    <a href='/' className={`${props.name}`}>
      <span className={`${props.name}__left-char`}>A</span>
      <span className={`${props.name}__right-char`}>V</span>
    </a>
  );
}

export default Logo;
