import { React } from 'react';
import './_HeaderSwitcher.scss';
import Button from '../Button/Button.jsx';
import Icon from '../Icon/Icon.jsx';

function HeaderSwitcher() {
  return (
    <div className='header__switcher'>
      <Button
        aria-label='Toggle theme'
        className='header__switcher-theme'
        name='header-switcher-theme-button'
        type='button'>
        <Icon
          className='theme'
          name='sun'
        />
      </Button>
    </div>
  );
}

export default HeaderSwitcher;
