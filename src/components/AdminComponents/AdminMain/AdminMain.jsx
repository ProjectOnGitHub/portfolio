import { Route, Routes } from 'react-router-dom';
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
  skills,
  skillsByType,
  skillsText,
  setContacts,
  setExperience,
  setProjects,
  setSkills,
  setSkillsText,
  openPopupDeleteItem,
  openPopupSaveData,
  saveSelectedItemData,
  togglePageVisibility,
}) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AdminPages
            pages={pages}
            togglePageVisibility={togglePageVisibility}
          />
        }
        exact
      />
      <Route
        path="profile"
        element={
          <AdminProfile
            description={profile.description}
            name={profile.name}
            openPopupSaveData={openPopupSaveData}
            position={profile.position}
          />
        }
        exact
      />
      <Route
        path="projects"
        element={
          <AdminProjects
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
            openPopupDeleteItem={openPopupDeleteItem}
            saveSelectedItemData={saveSelectedItemData}
            setSkills={setSkills}
            setSkillsText={setSkillsText}
            skills={skills}
            skillsByType={skillsByType}
            skillsText={skillsText}
          />
        }
        exact
      />
      <Route
        path="experience"
        element={
          <AdminExperience
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
            openPopupDeleteItem={openPopupDeleteItem}
            saveSelectedItemData={saveSelectedItemData}
            setContacts={setContacts}
          />
        }
        exact
      />
      <Route
        element={<AdminProject openPopupSaveData={openPopupSaveData} />}
        path="projects/:id"
        exact
      />

      <Route
        element={<AdminSkill openPopupSaveData={openPopupSaveData} />}
        path="skills/:id"
        exact
      />
      <Route
        element={<AdminExperienceItem openPopupSaveData={openPopupSaveData} />}
        path="experience/:id"
        exact
      />
      <Route
        element={<AdminContact openPopupSaveData={openPopupSaveData} />}
        path="contacts/:id"
        exact
      />
    </Routes>
  );
}

export default MainAdmin;
