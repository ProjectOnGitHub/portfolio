import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AdminPopupDeleteItem from 'components/AdminComponents/AdminPopupDeleteItem/AdminPopupDeleteItem';
import AdminPopupSaveData from 'components/AdminComponents/AdminPopupSaveData/AdminPopupSaveData';
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
  const [popupDeleteItemIsOpen, setPopupDeleteItemIsOpen] = useState(false);
  const [popupSaveDataIsOpen, setPopupSaveDataIsOpen] = useState(false);

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
      setProfile(profileInfo);
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
    setPopupDeleteItemIsOpen(true);
  }
  function closePopupDeleteItem() {
    setPopupDeleteItemIsOpen(false);
  }

  function openPopupSaveData() {
    setPopupSaveDataIsOpen(true);
  }
  function closePopupSaveData() {
    setPopupSaveDataIsOpen(false);
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
  function changeData(currentData) {
    const { endpoint, item, setState } = currentData;
    api.changeInfo(endpoint, item).then((newItem) => {
      setState(newItem);
    });
  }

  function confirmSaveData(state) {
    if (state) {
      changeData(selectedItem);
    }
    closePopupSaveData();
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
                <MainStart pages={pages} />
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
                  contacts={contacts}
                  experience={experience}
                  openPopupDeleteItem={openPopupDeleteItem}
                  openPopupSaveData={openPopupSaveData}
                  pages={pages}
                  popupDeleteItemIsOpen={popupDeleteItemIsOpen}
                  popupSaveDataIsOpen={popupSaveDataIsOpen}
                  profile={profile}
                  projects={projects}
                  saveSelectedItemData={saveSelectedItemData}
                  setContacts={setContacts}
                  setExperience={setExperience}
                  setProfile={setProfile}
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
                  popupDeleteIsOpen={popupDeleteItemIsOpen}
                />
                <AdminPopupSaveData
                  confirmSaveData={confirmSaveData}
                  popupSaveDataIsOpen={popupSaveDataIsOpen}
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
