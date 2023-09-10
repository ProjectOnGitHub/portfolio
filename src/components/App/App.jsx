import { React, useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import DarkThemeContext from '../../contexts/DarkThemeContext.jsx';
import './_App.scss';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Main from '../Main/Main.jsx';
import MainStart from '../MainStart/MainStart.jsx';
import MainAdmin from '../MainAdmin/MainAdmin.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const storedTheme = localStorage.getItem('isDarkTheme');
    return storedTheme ? JSON.parse(storedTheme) : false;
  });
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');

  useEffect(() => {
    localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  return (
    <div
      className={`${isDarkTheme ? 'app app_theme-dark' : 'app'} ${
        isAdminPath ? 'app_theme-admin' : ''
      }`}>
      <DarkThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
        <Switch>
          <Route
            path='/'
            exact>
            <Header isAdminPath={isAdminPath} />
            <Main>
              <MainStart />
            </Main>
            <Footer />
          </Route>
          <Route
            path='/admin'
            exact>
            <Header isAdminPath={isAdminPath} />
            <Main>
              <MainAdmin />
            </Main>
            <Footer />
          </Route>
          <Route
            path='/register'
            exact>
            <Register></Register>
          </Route>
          <Route
            path='/login'
            exact>
            <Login />
          </Route>
        </Switch>
      </DarkThemeContext.Provider>
    </div>
  );
}

export default App;
