import React from 'react';
import './_Header.scss';

import Nav from '../Nav/Nav';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import Logo from '../Logo/Logo';

function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <Logo name='logo' />

        <Nav name='header'>
          <HeaderMenu name='header' />
        </Nav>
      </div>
    </header>
  );
}

export default Header;
