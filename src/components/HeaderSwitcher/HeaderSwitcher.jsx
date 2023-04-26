import { React } from 'react';
import './_HeaderSwitcher.scss';
import Button from '../Button/Button.jsx';
import Icon from '../Icon/Icon.jsx';

function HeaderSwitcher({ isDarkTheme, onClick }) {
  return (
    <div className='header__switcher'>
      <Button
        aria-label='Toggle theme'
        className='header__switcher-button'
        name='header-switcher-theme-button'
        type='button'
        onClick={onClick}>
        <Icon
          className='theme'
          name={isDarkTheme ? 'moon' : 'sun'}
        />
      </Button>
    </div>
  );
}

export default HeaderSwitcher;
