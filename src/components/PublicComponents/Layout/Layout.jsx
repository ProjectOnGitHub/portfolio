import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';

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
