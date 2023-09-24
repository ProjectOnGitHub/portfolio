import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './_HeaderMenu.scss';
import Button from '../../BaseComponents/Button/Button.jsx';
import List from '../../BaseComponents/List/List.jsx';
import ListItem from '../../BaseComponents/ListItem/ListItem.jsx';

function HeaderMenu({ links, className, isAdminPath }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function toggleMenu() {
    if (isOpenMenu) {
      setIsOpenMenu(false);
    }
    if (!isOpenMenu) {
      setIsOpenMenu(true);
    }
  }

  function closeMenu() {
    if (isOpenMenu) {
      setIsOpenMenu(false);
    }
  }

  return (
    <>
      <Button
        aria-label="Open mobile menu"
        className="header__button"
        name="header-button"
        type="button"
        onClick={toggleMenu}>
        <span className={isOpenMenu ? 'cross  cross_active' : 'cross'}>
          <span className="cross__line"></span>
        </span>
      </Button>
      <div
        className={isOpenMenu ? 'overlay overlay_active' : 'overlay'}
        onClick={toggleMenu}></div>
      <List
        className={
          isOpenMenu
            ? `${className}__menu ${className}__menu_opened`
            : `${className}__menu`
        }>
        {links.map((item) => (
          <ListItem
            key={item.id}
            className={`${className}__menu-item`}>
            <Link
              className={`${className}__menu-link`}
              to={isAdminPath ? `/admin/${item.url}` : `#${item.url}`}
              onClick={closeMenu}>
              {item.anchor}
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default HeaderMenu;
