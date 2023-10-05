import { useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import DarkThemeContext from '../../contexts/DarkThemeContext.jsx';
import allContacts from '../../utils/contacts';
import allExperience from '../../utils/experience';
import allLinks from '../../utils/menu';
import about from '../../utils/profile';
import allProjects from '../../utils/projects';
import {
  skills as allSkills,
  skillsText as allSkillsText,
} from '../../utils/skills';
import AdminMain from '../AdminComponents/AdminMain/AdminMain.jsx';
import Layout from '../PublicComponents/Layout/Layout.jsx';
import Login from '../PublicComponents/Login/Login.jsx';
import MainStart from '../PublicComponents/MainStart/MainStart.jsx';
import Register from '../PublicComponents/Register/Register.jsx';
import './_App.scss';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const storedTheme = localStorage.getItem('isDarkTheme');
    return storedTheme ? JSON.parse(storedTheme) : false;
  });

  const [profile] = useState(about);
  const [projects, setProjects] = useState(allProjects);
  const [skills] = useState(allSkills);
  const [skillsText, setSkillsText] = useState(allSkillsText);
  const [links] = useState(allLinks);
  const [skillsByType, setSkillsByType] = useState({});
  const [experience, setExperience] = useState(allExperience);
  const [contacts, setContacts] = useState(allContacts);

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
                setContacts={setContacts}
                setExperience={setExperience}
                setProjects={setProjects}
                setSkillsText={setSkillsText}
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
