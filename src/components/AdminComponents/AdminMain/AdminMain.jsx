import { Route, Routes } from 'react-router-dom';
import AdminContact from '../AdminContact/AdminContact.jsx';
import AdminContacts from '../AdminContacts/AdminContacts.jsx';
import AdminExperience from '../AdminExperience/AdminExperience.jsx';
import AdminExperienceItem from '../AdminExperienceItem/AdminExperienceItem.jsx';
import AdminPages from '../AdminPages/AdminPages.jsx';
import AdminProfile from '../AdminProfile/AdminProfile.jsx';
import AdminProject from '../AdminProject/AdminProject.jsx';
import AdminProjects from '../AdminProjects/AdminProjects.jsx';
import AdminSkill from '../AdminSkill/AdminSkill.jsx';
import AdminSkills from '../AdminSkills/AdminSkills.jsx';

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
            className="pages"
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
            className="admin-section"
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
            className="admin-section"
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
