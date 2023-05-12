import { React, useState, useEffect } from 'react';
import DarkThemeContext from '../../contexts/DarkThemeContext.jsx';
import './_App.scss';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const storedTheme = localStorage.getItem('isDarkTheme');
    return storedTheme ? JSON.parse(storedTheme) : false;
  });

  useEffect(() => {
    localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  return (
    <div className={isDarkTheme ? 'app app_theme-dark' : 'app'}>
      <DarkThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
        <Header />
        <Main />
        <Footer />
      </DarkThemeContext.Provider>
    </div>
  );
}

export default App;
