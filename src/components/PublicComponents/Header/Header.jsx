import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './_Header.scss';
import Logo from 'components/BaseComponents/Logo/Logo';
import Nav from 'components/BaseComponents/Nav/Nav';
import HeaderMenu from 'components/PublicComponents/HeaderMenu/HeaderMenu';
import HeaderSwitcher from 'components/PublicComponents/HeaderSwitcher/HeaderSwitcher';

function Header({ isAdminPath, pages }) {
  const [color, setColor] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setColor(window.scrollY > 0));
    }
  }, []);

  return (
    <header
      className={`${color ? 'header header_fixed' : 'header'} ${
        isAdminPath ? 'header_theme-admin' : ''
      }`}>
      <div className="header__container">
        {isAdminPath ? (
          <Link
            className="header__link"
            to="/">
            <Logo
              className="middle"
              name="my-logo"
            />
          </Link>
        ) : (
          <a
            className="header__link"
            href="/#top">
            <Logo
              className="middle"
              name="my-logo"
            />
          </a>
        )}
        <Nav className="header">
          <HeaderMenu
            className="header"
            isAdminPath={isAdminPath}
            pages={pages}
          />
        </Nav>
        <HeaderSwitcher />
      </div>
    </header>
  );
}

export default Header;
