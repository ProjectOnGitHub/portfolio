import { React, useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import DarkThemeContext from '../../contexts/DarkThemeContext.jsx';
import './_App.scss';
import Layout from '../Layout/Layout.jsx';
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
            <Layout isAdminPath={isAdminPath}>
              <MainStart />
            </Layout>
          </Route>
          <Route path='/admin'>
            <Layout isAdminPath={isAdminPath}>
              <MainAdmin />
            </Layout>
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
