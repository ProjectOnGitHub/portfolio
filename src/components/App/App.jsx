import { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import DarkThemeContext from '../../contexts/DarkThemeContext.jsx';
import './_App.scss';
import Layout from '../PublicComponents/Layout/Layout.jsx';
import MainStart from '../PublicComponents/MainStart/MainStart.jsx';
import AdminMain from '../AdminComponents/AdminMain/AdminMain.jsx';
import Register from '../PublicComponents/Register/Register.jsx';
import Login from '../PublicComponents/Login/Login.jsx';

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
            path="/"
            exact>
            <Layout isAdminPath={isAdminPath}>
              <MainStart />
            </Layout>
          </Route>
          <Route path="/admin">
            <Layout isAdminPath={isAdminPath}>
              <AdminMain />
            </Layout>
          </Route>
          <Route
            path="/register"
            exact>
            <Register></Register>
          </Route>
          <Route
            path="/login"
            exact>
            <Login />
          </Route>
        </Switch>
      </DarkThemeContext.Provider>
    </div>
  );
}

export default App;
