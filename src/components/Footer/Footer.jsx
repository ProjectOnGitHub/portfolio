import { React, useState, useEffect, useContext } from 'react';
import Logo from '../Logo/Logo.jsx';
import './_Footer.scss';
import DarkThemeContext from '../../contexts/DarkThemeContext.jsx';

function Footer() {
  const { isDarkTheme } = useContext(DarkThemeContext);
  const [year, setYear] = useState();

  function addYear() {
    const currentYear = new Date().getFullYear();
    if (currentYear === 2022) {
      setYear(currentYear);
    } else setYear(`2022-${+currentYear}`);
  }

  useEffect(() => {
    addYear();
  });

  return (
    <footer className={isDarkTheme ? 'footer footer_theme-dark' : 'footer'}>
      <div className='footer__container'>
        <div className='footer__copyright'>{`© ${year}`}</div>
        <Logo
          className='small'
          name='my-logo'
        />
      </div>
    </footer>
  );
}

export default Footer;
