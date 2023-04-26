import { React, useState } from 'react';
import './_Header.scss';
import Logo from '../Logo/Logo.jsx';
import Nav from '../Nav/Nav.jsx';
import HeaderMenu from '../HeaderMenu/HeaderMenu.jsx';
import HeaderSwitcher from '../HeaderSwitcher/HeaderSwitcher.jsx';

function Header() {
  const [isDarkTheme, setIsDarkTeme] = useState(false);

  function toggleTheme() {
    if (isDarkTheme) {
      setIsDarkTeme(false);
    }
    if (!isDarkTheme) {
      setIsDarkTeme(true);
    }
  }

  return (
    <header className='header'>
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
        <HeaderSwitcher
          isClick={toggleTheme}
          isDarkTheme={isDarkTheme}
        />
      </div>
    </header>
  );
}

export default Header;
