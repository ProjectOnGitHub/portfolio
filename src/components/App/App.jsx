import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AdminPopupDeleteItem from 'components/AdminComponents/AdminPopupDeleteItem/AdminPopupDeleteItem';
import MainStart from 'components/PublicComponents/MainStart/MainStart';
import Register from 'components/PublicComponents/Register/Register';
import DarkThemeContext from 'contexts/DarkThemeContext';
import AdminMain from 'components/AdminComponents/AdminMain/AdminMain';
import Layout from 'components/PublicComponents/Layout/Layout';
import Login from 'components/PublicComponents/Login/Login';
import * as api from 'utils/api';
import './_App.scss';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const storedTheme = localStorage.getItem('isDarkTheme');
    return storedTheme ? JSON.parse(storedTheme) : false;
  });
  const [selectedItem, setSelectedItem] = useState({});
  const [profile, setProfile] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [skillsText, setSkillsText] = useState([]);
  const [pages, setPages] = useState([]);
  const [skillsByType, setSkillsByType] = useState({});
  const [experience, setExperience] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [popupIsOpen, setPopupIsOpen] = useState(false);

  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');

  useEffect(() => {
    localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  useEffect(() => {
    async function fetchData() {
      const [
        profileInfo,
        allProjects,
        allPages,
        skillsInfo,
        allSkills,
        allExperience,
        allContacts,
      ] = await Promise.all([
        api.getProfileInfo(),
        api.getProjects(),
        api.getPages(),
        api.getSkillsText(),
        api.getSkills(),
        api.getExperience(),
        api.getContacts(),
      ]);

      setProfile(...profileInfo);
      setProjects(allProjects);
      setPages(allPages);
      setSkillsText(skillsInfo);
      setSkills(allSkills);
      setExperience(allExperience);
      setContacts(allContacts);
    }

    fetchData();
  }, []);

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
  }, [skills]);

  function openPopupDeleteItem() {
    setPopupIsOpen(true);
  }
  function closePopupDeleteItem() {
    setPopupIsOpen(false);
  }

  function saveSelectedItemData(data) {
    setSelectedItem(data);
  }

  function removeItem(currentItem) {
    const { endpoint, itemId, currentArray, setState } = currentItem;
    api.deleteItem(endpoint, itemId).then(() => {
      const newArr = currentArray.filter((item) => item.id !== itemId);
      setState(newArr);
    });
  }

  function confirmDeleteItem(state) {
    if (state) {
      removeItem(selectedItem);
    }
    closePopupDeleteItem();
  }

  function togglePageVisibility({ id, isEnabled }) {
    api.changePageVisibility(id, !isEnabled).then((updatedPage) => {
      const updatedPages = [...pages];
      const pageIndex = updatedPages.findIndex((page) => page.id === id);
      if (pageIndex !== -1) {
        updatedPages[pageIndex].isEnabled = updatedPage.isEnabled;
        setPages(updatedPages);
      }
    });
  }

  return (
    <div
      className={`${isDarkTheme ? 'app app_theme-dark' : 'app'} ${
        isAdminPath ? 'app_theme-admin' : ''
      }`}>
      <DarkThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                isAdminPath={isAdminPath}
                pages={pages}>
                <MainStart
                  contacts={contacts}
                  experience={experience}
                  pages={pages}
                  profile={profile}
                  projects={projects}
                  skillsByType={skillsByType}
                  skillsText={skillsText}
                />
              </Layout>
            }
          />
          <Route
            path="/admin/*"
            element={
              <Layout
                isAdminPath={isAdminPath}
                pages={pages}>
                <AdminMain
                  confirmDeleteItem={confirmDeleteItem}
                  contacts={contacts}
                  experience={experience}
                  openPopupDeleteItem={openPopupDeleteItem}
                  pages={pages}
                  popupIsOpen={popupIsOpen}
                  profile={profile}
                  projects={projects}
                  saveSelectedItemData={saveSelectedItemData}
                  setContacts={setContacts}
                  setExperience={setExperience}
                  setProjects={setProjects}
                  setSkills={setSkills}
                  setSkillsText={setSkillsText}
                  skills={skills}
                  skillsByType={skillsByType}
                  skillsText={skillsText}
                  togglePageVisibility={togglePageVisibility}
                />
                <AdminPopupDeleteItem
                  confirmDeleteItem={confirmDeleteItem}
                  popupIsOpen={popupIsOpen}
                />
              </Layout>
            }
          />
          <Route
            element={<Register />}
            path="/register"
            exact
          />
          <Route
            element={<Login />}
            path="/login"
            exact
          />
        </Routes>
      </DarkThemeContext.Provider>
    </div>
  );
}

export default App;
