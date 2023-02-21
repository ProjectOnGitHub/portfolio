import React from 'react';
import Logo from '../Logo/Logo.jsx';
import './_Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Logo className="logo logo_small" />
        <div className="footer__copyright">2023</div>
      </div>
    </footer>
  );
}

export default Footer;
