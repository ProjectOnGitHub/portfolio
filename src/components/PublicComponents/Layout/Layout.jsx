import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Main from '../Main/Main.jsx';

function Layout({ children, isAdminPath, pages }) {
  return (
    <>
      <Header
        isAdminPath={isAdminPath}
        pages={pages}
      />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

export default Layout;
