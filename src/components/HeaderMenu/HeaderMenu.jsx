import { React, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './_HeaderMenu.scss';
import Button from '../Button/Button.jsx';
import ListItem from '../ListItem/ListItem.jsx';
import menu from '../../utils/menu';

function HeaderMenu(props) {
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
        aria-label='Open mobile menu'
        className='header__button'
        name='header-button'
        type='button'
        onClick={toggleMenu}>
        <span className={isOpenMenu ? 'cross  cross_active' : 'cross'}>
          <span className='cross__line'></span>
        </span>
      </Button>
      <div
        className={isOpenMenu ? 'overlay overlay_active' : 'overlay'}
        onClick={toggleMenu}></div>
      <ul
        className={
          isOpenMenu
            ? `${props.className}__menu ${props.className}__menu_opened`
            : `${props.className}__menu`
        }>
        {menu.map((item) => (
          <ListItem
            key={item.id}
            className={`${props.className}__menu-item`}>
            <Link
              className={`${props.className}__menu-link`}
              to={`#${item.url}`}
              onClick={closeMenu}>
              {item.anchor}
            </Link>
          </ListItem>
        ))}
      </ul>
    </>
  );
}

export default HeaderMenu;
