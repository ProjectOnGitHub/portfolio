import React from 'react';
import './_Logo.scss';

function Logo(props) {
  return (
    <a
      className={`${props.className}`}
      href='/'
    >
      <span className='logo__left-char'>A</span>
      <span className='logo__right-char'>V</span>
    </a>
  );
}

export default Logo;
