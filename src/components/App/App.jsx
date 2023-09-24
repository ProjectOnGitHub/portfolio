import { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import DarkThemeContext from '../../contexts/DarkThemeContext.jsx';
import allProjects from '../../utils/projects';
import allSkills from '../../utils/skills';
import allLinks from '../../utils/menu';
import allExperience from '../../utils/experience';

import './_App.scss';
import AdminMain from '../AdminComponents/AdminMain/AdminMain.jsx';
import Layout from '../PublicComponents/Layout/Layout.jsx';
import Login from '../PublicComponents/Login/Login.jsx';
import MainStart from '../PublicComponents/MainStart/MainStart.jsx';
import Register from '../PublicComponents/Register/Register.jsx';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const storedTheme = localStorage.getItem('isDarkTheme');
    return storedTheme ? JSON.parse(storedTheme) : false;
  });
  const [projects] = useState(allProjects);
  const [skills] = useState(allSkills);
  const [links] = useState(allLinks);
  const [skillsByType, setSkillsByType] = useState({});
  const [experience] = useState(allExperience);

  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');

  useEffect(() => {
    localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  useEffect(() => {
    const updateSkills = {};
    skills.forEach((skill) => {
      if (!updateSkills[skill.type]) {
        updateSkills[skill.type] = {
          type: skill.type,
          sectionTitle: skill.sectionTitle,
          skills: [],
        };
      }
      updateSkills[skill.type].skills.push(skill);
    });

    setSkillsByType(updateSkills);
  }, []);

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
            <Layout
              isAdminPath={isAdminPath}
              links={links}>
              <MainStart
                experience={experience}
                projects={projects}
                skillsByType={skillsByType}
              />
            </Layout>
          </Route>
          <Route path="/admin">
            <Layout
              isAdminPath={isAdminPath}
              links={links}>
              <AdminMain
                experience={experience}
                projects={projects}
                skillsByType={skillsByType}
              />
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
