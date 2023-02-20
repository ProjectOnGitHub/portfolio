import { React, useState } from 'react';
import Button from '../Button/Button';
import './_HeaderMenu.scss';
import { HashLink as Link } from 'react-router-hash-link';

function HeaderMenu(props) {

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function toggleMenu() {
    isOpenMenu
      ? setIsOpenMenu(false) || (document.body.classList.remove("scroll-lock"))
      : setIsOpenMenu(true) || (document.body.classList.add("scroll-lock"));

  }

  return (
    <>
      <Button
        name="header-button"
        className="header__button"
        aria-label="Open mobile menu"
        type="button"
        isClick={toggleMenu}
      >
        <span className={isOpenMenu ? "cross  cross_active" : "cross"}><span className="cross__line"></span></span>
      </Button>
      <div
        className={isOpenMenu ? "overlay overlay_active" : "overlay"}
        onClick={toggleMenu}>
      </div>
      <ul
        className={isOpenMenu ? `${props.name}__menu ${props.name}__menu_opened` : `${props.name}__menu`}>
        <li className={`${props.name}__menu-item`} onClick={toggleMenu}>
          <Link to="#about" className={`${props.name}__menu-link`}>
            About
          </Link>
        </li>
        <li className={`${props.name}__menu-item`} onClick={toggleMenu}>
          <Link to="#projects" className={`${props.name}__menu-link`}>
            Projects
          </Link>
        </li>
        <li className={`${props.name}__menu-item`} onClick={toggleMenu}>
          <Link to="#skills" className={`${props.name}__menu-link`}>
            Skills
          </Link>
        </li>
        <li className={`${props.name}__menu-item`} onClick={toggleMenu}>
          <Link to="#contacts" className={`${props.name}__menu-link`}>
            Contacts
          </Link>
        </li>
      </ul>
    </>
  );
}

export default HeaderMenu;
