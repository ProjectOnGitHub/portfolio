import React from 'react';
import './_HeaderMenu.scss';
import { HashLink as Link } from 'react-router-hash-link';

function HeaderMenu(props) {
  return (
    <ul className={`${props.name}__menu`}>
      <li className={`${props.name}__menu-item`}>
        <Link to="#about" className={`${props.name}__menu-link`}>
          About
        </Link>
      </li>
      <li className={`${props.name}__menu-item`}>
        <Link to="#projects" className={`${props.name}__menu-link`}>
          Portfolio
        </Link>
      </li>
      <li className={`${props.name}__menu-item`}>
        <Link to="#skills" className={`${props.name}__menu-link`}>
          Skills
        </Link>
      </li>
      <li className={`${props.name}__menu-item`}>
        <Link to="#contacts" className={`${props.name}__menu-link`}>
          Contacts
        </Link>
      </li>
    </ul>
  );
}

export default HeaderMenu;
