import React from 'react';
import './_Nav.scss';

function Nav(props) {
  return (
    <nav className={`${props.className}__navigation`}>{props.children}</nav>
  );
}

export default Nav;
