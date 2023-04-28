import { React, useState, useEffect } from 'react';
import Logo from '../Logo/Logo.jsx';
import './_Footer.scss';

function Footer() {
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
    <footer className='footer'>
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
