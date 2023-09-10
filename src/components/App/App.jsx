import { React, useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import DarkThemeContext from '../../contexts/DarkThemeContext.jsx';
import './_App.scss';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Main from '../Main/Main.jsx';
import MainStart from '../MainStart/MainStart.jsx';
import MainAdmin from '../MainAdmin/MainAdmin.jsx';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const storedTheme = localStorage.getItem('isDarkTheme');
    return storedTheme ? JSON.parse(storedTheme) : false;
  });

  const locationPath = useLocation().pathname;
  console.log(locationPath);

  useEffect(() => {
    localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  return (
    <div className={isDarkTheme ? 'app app_theme-dark' : 'app'}>
      <DarkThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
        <Switch>
          <Route
            path='/'
            exact>
            <Header isAdmin={false} />
            <Main>
              <MainStart />
            </Main>
            <Footer />
          </Route>
          <Route
            path='/admin'
            exact>
            <Header isAdmin={true} />
            <Main>
              <MainAdmin />
            </Main>
            <Footer />
          </Route>
        </Switch>
      </DarkThemeContext.Provider>
    </div>
  );
}

export default App;
