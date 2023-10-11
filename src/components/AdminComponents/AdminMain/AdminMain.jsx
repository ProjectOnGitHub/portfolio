import { Route, Switch } from 'react-router-dom';
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
    <>
      <Switch>
        <Route
          path="/admin"
          exact>
          <AdminPages
            className="pages"
            pages={pages}
            togglePageVisibility={togglePageVisibility}
          />
        </Route>
        <Route
          path="/admin/profile"
          exact>
          <AdminProfile
            description={profile.description}
            name={profile.name}
            openPopup={openPopup}
            position={profile.position}
          />
        </Route>
        <Route
          path="/admin/projects"
          exact>
          <AdminProjects
            openPopup={openPopup}
            projects={projects}
            saveSelectedItemData={saveSelectedItemData}
            setProjects={setProjects}
          />
        </Route>
        <Route
          path="/admin/skills"
          exact>
          <AdminSkills
            openPopup={openPopup}
            saveSelectedItemData={saveSelectedItemData}
            setSkills={setSkills}
            setSkillsText={setSkillsText}
            skills={skills}
            skillsByType={skillsByType}
            skillsText={skillsText}
          />
        </Route>
        <Route
          path="/admin/experience"
          exact>
          <AdminExperience
            className="admin-section"
            experience={experience}
            openPopup={openPopup}
            saveSelectedItemData={saveSelectedItemData}
            setExperience={setExperience}
          />
        </Route>
        <Route
          path="/admin/contacts"
          exact>
          <AdminContacts
            className="admin-section"
            contacts={contacts}
            openPopup={openPopup}
            saveSelectedItemData={saveSelectedItemData}
            setContacts={setContacts}
          />
        </Route>
        {projects.map((project) => (
          <Route
            key={project.id}
            path="/admin/projects/:id"
            exact>
            <AdminProject project={project} />
          </Route>
        ))}
        <Route
          path="/admin/skills/:id"
          exact>
          <AdminSkill />
        </Route>
        <Route
          path="/admin/experience/:id"
          exact>
          <AdminExperienceItem />
        </Route>
        <Route
          path="/admin/contacts/:id"
          exact>
          <AdminContact />
        </Route>
      </Switch>
    </>
  );
}

export default MainAdmin;
