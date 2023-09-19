import { React } from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Main from '../Main/Main.jsx';

function Layout({ children, isAdminPath }) {
  return (
    <>
      <Header isAdminPath={isAdminPath} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

export default Layout;
