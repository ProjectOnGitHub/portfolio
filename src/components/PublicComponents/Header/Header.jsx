import { useEffect, useState } from 'react';
import './_Header.scss';
import Logo from '../../BaseComponents/Logo/Logo.jsx';
import Nav from '../../BaseComponents/Nav/Nav.jsx';
import HeaderMenu from '../HeaderMenu/HeaderMenu.jsx';
import HeaderSwitcher from '../HeaderSwitcher/HeaderSwitcher.jsx';

function Header({ isAdminPath }) {
  const [color, setColor] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setColor(window.pageYOffset > 0));
    }
  }, []);

  return (
    <header
      className={`${color ? 'header header_fixed' : 'header'} ${
        isAdminPath ? 'header_theme-admin' : ''
      }`}>
      <div className="header__container">
        <a
          className="header__link"
          href="/#top">
          <Logo
            className="middle"
            name="my-logo"
          />
        </a>
        <Nav className="header">
          <HeaderMenu
            className="header"
            isAdminPath={isAdminPath}
          />
        </Nav>
        <HeaderSwitcher />
      </div>
    </header>
  );
}

export default Header;
