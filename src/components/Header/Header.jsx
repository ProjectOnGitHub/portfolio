import React from 'react';
import './_Header.scss';
import Logo from '../Logo/Logo.jsx';
import Nav from '../Nav/Nav.jsx';
import HeaderMenu from '../HeaderMenu/HeaderMenu.jsx';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Logo className="logo" />
        <Nav className="header">
          <HeaderMenu className="header" />
        </Nav>
      </div>
    </header>
  );
}

export default Header;
