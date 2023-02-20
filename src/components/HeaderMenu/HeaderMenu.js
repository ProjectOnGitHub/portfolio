import { React, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './_HeaderMenu.scss';
import Button from '../Button/Button';
import ListItem from '../ListItem/ListItem';
import menu from '../../utils/menu';

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
      <ul className={isOpenMenu ? `${props.className}__menu ${props.className}__menu_opened` : `${props.className}__menu`}>
        {
          menu.map((item) => (
            <ListItem
              className={`${props.className}__menu-item`}
              key={item.id}>
              <Link
                to={`#${item.url}`}
                className={`${props.className}__menu-link`}
                onClick={toggleMenu}>
                {item.anchor}
              </Link>
            </ListItem>
          ))
        }
      </ul>
    </>
  );
}

export default HeaderMenu;
