import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

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
  const [, setProfile] = useState([]);
  const [, setProjects] = useState([]);
  const [, setSkills] = useState([]);
  const [, setSkillsText] = useState([]);
  const [pages, setPages] = useState([]);
  const [, setExperience] = useState([]);
  const [, setContacts] = useState([]);
  const [popupDeleteItemIsOpen, setPopupDeleteItemIsOpen] = useState(false);
  const [popupSaveDataIsOpen, setPopupSaveDataIsOpen] = useState(false);

  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');

  useEffect(() => {
    localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  useEffect(() => {
    async function fetchData() {
      const allPages = await api.getItemInfo('pages');
      setPages(allPages);
    }

    fetchData();
  }, []);

  function openPopupDeleteItem() {
    console.log('openPopupDeleteItem');
    setPopupDeleteItemIsOpen(true);
  }
  function closePopupDeleteItem() {
    setPopupDeleteItemIsOpen(false);
  }

  function openPopupSaveData() {
    console.log('openPopupSaveData');
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
  console.log(confirmDeleteItem);

  function confirmSaveData(state) {
    if (state) {
      changeData(selectedItem);
    }
    closePopupSaveData();
  }
  console.log(confirmSaveData);

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
                  openPopupDeleteItem={openPopupDeleteItem}
                  openPopupSaveData={openPopupSaveData}
                  pages={pages}
                  popupDeleteItemIsOpen={popupDeleteItemIsOpen}
                  popupSaveDataIsOpen={popupSaveDataIsOpen}
                  saveSelectedItemData={saveSelectedItemData}
                  setContacts={setContacts}
                  setExperience={setExperience}
                  setProfile={setProfile}
                  setProjects={setProjects}
                  setSkills={setSkills}
                  setSkillsText={setSkillsText}
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
