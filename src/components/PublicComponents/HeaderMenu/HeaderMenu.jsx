import { Fragment, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './_HeaderMenu.scss';
import Button from 'components/BaseComponents/Button/Button';
import List from 'components/BaseComponents/List/List';
import ListItem from 'components/BaseComponents/ListItem/ListItem';

function HeaderMenu({ pages, className, isAdminPath }) {
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
        {isAdminPath && (
          <Link
            className={`${className}__menu-link`}
            to="/admin">
            Страницы
          </Link>
        )}
        {pages.map((link) => (
          <Fragment key={link.id}>
            {!isAdminPath && link.isEnabled && (
              <ListItem className={`${className}__menu-item`}>
                <Link
                  className={`${className}__menu-link`}
                  to={`#${link.url}`}
                  onClick={closeMenu}>
                  {link.anchor}
                </Link>
              </ListItem>
            )}
            {isAdminPath && (
              <ListItem className={`${className}__menu-item`}>
                <Link
                  className={`${className}__menu-link`}
                  to={`/admin/${link.url}`}
                  onClick={closeMenu}>
                  {link.anchor}
                </Link>
              </ListItem>
            )}
          </Fragment>
        ))}
      </List>
    </>
  );
}

export default HeaderMenu;
