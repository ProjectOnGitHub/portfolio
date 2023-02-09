import React from 'react';
import './_Nav.scss';

function Nav(props) {
  return <nav className={`${props.name}__navigation`}>{props.children}</nav>;
}

export default Nav;
