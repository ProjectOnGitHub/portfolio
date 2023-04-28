import { React, useEffect, useState } from 'react';
import './_Header.scss';
import Logo from '../Logo/Logo.jsx';
import Nav from '../Nav/Nav.jsx';
import HeaderMenu from '../HeaderMenu/HeaderMenu.jsx';
import HeaderSwitcher from '../HeaderSwitcher/HeaderSwitcher.jsx';

function Header() {
  const [color, setColor] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setColor(window.pageYOffset > 0));
    }
  }, []);

  return (
    <header className={`header ${color ? 'header_fixed' : ''}`}>
      <div className='header__container'>
        <a
          className='header__link'
          href='/'>
          <Logo
            className='middle'
            name='my-logo'
          />
        </a>
        <Nav className='header'>
          <HeaderMenu className='header' />
        </Nav>
        <HeaderSwitcher />
      </div>
    </header>
  );
}

export default Header;
