import { Route, Routes, useParams } from 'react-router-dom';
import AdminContact from 'pages/AdminContact/AdminContact';
import AdminContacts from 'pages/AdminContacts/AdminContacts';
import AdminExperience from 'pages/AdminExperience/AdminExperience';
import AdminExperienceItem from 'pages/AdminExperienceItem/AdminExperienceItem';
import AdminPages from 'pages/AdminPages/AdminPages';
import AdminProfile from 'pages/AdminProfile/AdminProfile';
import AdminProject from 'pages/AdminProject/AdminProject';
import AdminProjects from 'pages/AdminProjects/AdminProjects';
import AdminSkill from 'pages/AdminSkill/AdminSkill';
import AdminSkills from 'pages/AdminSkills/AdminSkills';

function MainAdmin({
  contacts,
  experience,
  pages,
  profile,
  projects,
  setContacts,
  setExperience,
  setProfile,
  setProjects,
  openPopupDeleteItem,
  openPopupSaveData,
  saveSelectedItemData,
}) {
  const { '*': endpoint } = useParams();

  return (
    <Routes>
      <Route
        element={<AdminPages pages={pages} />}
        path="/"
        exact
      />
      <Route
        path="profile"
        element={
          <AdminProfile
            endpoint={endpoint}
            openPopupSaveData={openPopupSaveData}
            profile={profile}
            saveSelectedItemData={saveSelectedItemData}
            setProfile={setProfile}
          />
        }
        exact
      />
      <Route
        path="projects"
        element={
          <AdminProjects
            endpoint={endpoint}
            openPopupDeleteItem={openPopupDeleteItem}
            projects={projects}
            saveSelectedItemData={saveSelectedItemData}
            setProjects={setProjects}
          />
        }
        exact
      />
      <Route
        path="skills"
        element={
          <AdminSkills
            endpoint={endpoint}
            openPopupDeleteItem={openPopupDeleteItem}
            saveSelectedItemData={saveSelectedItemData}
          />
        }
        exact
      />
      <Route
        path="experience"
        element={
          <AdminExperience
            endpoint={endpoint}
            experience={experience}
            openPopupDeleteItem={openPopupDeleteItem}
            saveSelectedItemData={saveSelectedItemData}
            setExperience={setExperience}
          />
        }
        exact
      />
      <Route
        path="contacts"
        element={
          <AdminContacts
            contacts={contacts}
            endpoint={endpoint}
            openPopupDeleteItem={openPopupDeleteItem}
            saveSelectedItemData={saveSelectedItemData}
            setContacts={setContacts}
          />
        }
        exact
      />
      <Route
        path="projects/:id"
        element={
          <AdminProject
            endpoint={endpoint}
            openPopupSaveData={openPopupSaveData}
          />
        }
        exact
      />

      <Route
        path="skills/:id"
        element={
          <AdminSkill
            endpoint={endpoint}
            openPopupSaveData={openPopupSaveData}
          />
        }
        exact
      />
      <Route
        path="experience/:id"
        element={
          <AdminExperienceItem
            endpoint={endpoint}
            openPopupSaveData={openPopupSaveData}
          />
        }
        exact
      />
      <Route
        path="contacts/:id"
        element={
          <AdminContact
            endpoint={endpoint}
            openPopupSaveData={openPopupSaveData}
          />
        }
        exact
      />
    </Routes>
  );
}

export default MainAdmin;
