import { React, useContext } from 'react';
import './_HeaderSwitcher.scss';
import DarkThemeContext from '../../contexts/DarkThemeContext.jsx';
import Button from '../Button/Button.jsx';
import Icon from '../Icon/Icon.jsx';

function HeaderSwitcher() {
  const { isDarkTheme, setIsDarkTheme } = useContext(DarkThemeContext);
  function toggleTheme() {
    if (isDarkTheme) {
      setIsDarkTheme(false);
    }
    if (!isDarkTheme) {
      setIsDarkTheme(true);
    }
    localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
  }

  return (
    <div className='header__switcher'>
      <Button
        aria-label='Toggle theme'
        className='header__switcher-button'
        name='header-switcher-theme-button'
        type='button'
        onClick={toggleTheme}>
        <Icon
          className='theme'
          name={isDarkTheme ? 'sun' : 'moon'}
        />
      </Button>
    </div>
  );
}

export default HeaderSwitcher;
