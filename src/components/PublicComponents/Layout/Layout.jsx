import Header from 'components/PublicComponents/Header/Header';
import Footer from 'components/PublicComponents/Footer/Footer';
import Main from 'components/PublicComponents/Main/Main';

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
