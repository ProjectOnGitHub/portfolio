import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Main from '../Main/Main.jsx';

function Layout({ children, isAdminPath, links }) {
  return (
    <>
      <Header
        isAdminPath={isAdminPath}
        links={links}
      />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

export default Layout;
