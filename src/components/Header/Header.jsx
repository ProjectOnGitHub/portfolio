import { React, useState } from 'react';
import './_Header.scss';
import Logo from '../Logo/Logo.jsx';
import Nav from '../Nav/Nav.jsx';
import HeaderMenu from '../HeaderMenu/HeaderMenu.jsx';
import HeaderSwitcher from '../HeaderSwitcher/HeaderSwitcher.jsx';

function Header() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function toggleTheme() {
    if (isDarkTheme) {
      setIsDarkTheme(false);
    }
    if (!isDarkTheme) {
      setIsDarkTheme(true);
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
          isDarkTheme={isDarkTheme}
          onClick={toggleTheme}
        />
      </div>
    </header>
  );
}

export default Header;
