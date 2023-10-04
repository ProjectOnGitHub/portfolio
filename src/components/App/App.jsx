import { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import DarkThemeContext from '../../contexts/DarkThemeContext.jsx';
import allProjects from '../../utils/projects';
import {
  skillsText as allSkillsText,
  skills as allSkills,
} from '../../utils/skills';
import allLinks from '../../utils/menu';
import allExperience from '../../utils/experience';
import allContacts from '../../utils/contacts';
import about from '../../utils/profile';

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

  const [profile] = useState(about);
  const [projects, setProjects] = useState(allProjects);
  const [skills] = useState(allSkills);
  const [skillsText] = useState(allSkillsText);

  const [links] = useState(allLinks);
  const [skillsByType, setSkillsByType] = useState({});
  const [experience] = useState(allExperience);
  const [contacts] = useState(allContacts);

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
                contacts={contacts}
                experience={experience}
                profile={profile}
                projects={projects}
                skillsByType={skillsByType}
                skillsText={skillsText}
              />
            </Layout>
          </Route>
          <Route path="/admin">
            <Layout
              isAdminPath={isAdminPath}
              links={links}>
              <AdminMain
                contacts={contacts}
                experience={experience}
                links={links}
                profile={profile}
                projects={projects}
                setProjects={setProjects}
                skillsByType={skillsByType}
                skillsText={skillsText}
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
