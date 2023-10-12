import { Route, Routes } from 'react-router-dom';
import AdminContact from '../../../pages/AdminContact/AdminContact.jsx';
import AdminContacts from '../../../pages/AdminContacts/AdminContacts.jsx';
import AdminExperience from '../../../pages/AdminExperience/AdminExperience.jsx';
import AdminExperienceItem from '../../../pages/AdminExperienceItem/AdminExperienceItem.jsx';
import AdminPages from '../../../pages/AdminPages/AdminPages.jsx';
import AdminProfile from '../../../pages/AdminProfile/AdminProfile.jsx';
import AdminProject from '../../../pages/AdminProject/AdminProject.jsx';
import AdminProjects from '../../../pages/AdminProjects/AdminProjects.jsx';
import AdminSkill from '../../../pages/AdminSkill/AdminSkill.jsx';
import AdminSkills from '../../../pages/AdminSkills/AdminSkills.jsx';

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
  openPopup,
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
            openPopup={openPopup}
            position={profile.position}
          />
        }
        exact
      />
      <Route
        path="projects"
        element={
          <AdminProjects
            openPopup={openPopup}
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
            openPopup={openPopup}
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
            openPopup={openPopup}
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
            openPopup={openPopup}
            saveSelectedItemData={saveSelectedItemData}
            setContacts={setContacts}
          />
        }
        exact
      />
      {projects.map((project) => (
        <Route
          key={project.id}
          element={<AdminProject project={project} />}
          path="projects/:id"
          exact
        />
      ))}
      <Route
        element={<AdminSkill />}
        path="skills/:id"
        exact
      />
      <Route
        element={<AdminExperienceItem />}
        path="experience/:id"
        exact
      />
      <Route
        element={<AdminContact />}
        path="contacts/:id"
        exact
      />
    </Routes>
  );
}

export default MainAdmin;
