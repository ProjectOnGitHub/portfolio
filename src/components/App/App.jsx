import { useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import DarkThemeContext from '../../contexts/DarkThemeContext.jsx';
import AdminMain from '../AdminComponents/AdminMain/AdminMain.jsx';
import Layout from '../PublicComponents/Layout/Layout.jsx';
import Login from '../PublicComponents/Login/Login.jsx';
import MainStart from '../PublicComponents/MainStart/MainStart.jsx';
import Register from '../PublicComponents/Register/Register.jsx';
import * as api from '../../utils/api';
import './_App.scss';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const storedTheme = localStorage.getItem('isDarkTheme');
    return storedTheme ? JSON.parse(storedTheme) : false;
  });
  const [profile, setProfile] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [skillsText, setSkillsText] = useState([]);
  const [links, setLinks] = useState([]);
  const [skillsByType, setSkillsByType] = useState({});
  const [experience, setExperience] = useState([]);
  const [contacts, setContacts] = useState([]);

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

  useEffect(
    () =>
      Promise.all([
        api.getProfileInfo(),
        api.getProjects(),
        api.getMenu(),
        api.getSkillsText(),
        api.getSkills(),
        api.getExperience(),
        api.getContacts(),
      ]).then(
        ([
          profileInfo,
          allProjects,
          allLinks,
          skillsInfo,
          allSkills,
          allExperience,
          allContacts,
        ]) => {
          setProfile(...profileInfo);
          setProjects(allProjects);
          setLinks(allLinks);
          setSkillsText(skillsInfo);
          setSkills(...allSkills);
          setExperience(allExperience);
          setContacts(allContacts);
        },
      ),
    [],
  );

  function handleDeleteItem(endpoint, itemId, array, setState) {
    api.deleteItem(endpoint, itemId).then(() => {
      const newArr = array.filter((item) => item.id !== itemId);
      const question = window.confirm('Хотите удалить элемент?');
      if (question) {
        setState(newArr);
      }
    });
  }

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
                handleDeleteItem={handleDeleteItem}
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
