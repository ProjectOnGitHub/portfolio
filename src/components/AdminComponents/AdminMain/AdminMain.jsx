import { Route, Switch } from 'react-router-dom';
import AdminSection from '../AdminSection/AdminSection.jsx';
import AdminProfile from '../AdminProfile/AdminProfile.jsx';
import AdminProjects from '../AdminProjects/AdminProjects.jsx';
import AdminProject from '../AdminProject/AdminProject.jsx';
import AdminSkills from '../AdminSkills/AdminSkills.jsx';
import AdminSkill from '../AdminSkill/AdminSkill.jsx';
import AdminExperience from '../AdminExperience/AdminExperience.jsx';
import AdminExperienceItem from '../AdminExperienceItem/AdminExperienceItem.jsx';
import AdminContacts from '../AdminContacts/AdminContacts.jsx';
import AdminContact from '../AdminContact/AdminContact.jsx';

function MainAdmin({
  projects,
  skillsByType,
  experience,
  contacts,
  setProjects,
  profile,
  skillsText,
}) {
  function deleteItem(array, currentItem, setState) {
    const updatedArray = array.filter((item) => item !== currentItem);
    setState(updatedArray);
  }

  function editItem(item) {
    console.log('edit Element');
    console.log(item);
  }

  return (
    <>
      <Switch>
        <Route
          path="/admin/profile"
          exact>
          <AdminSection
            className="profile"
            id="profile"
            modifier="profile"
            title="Редактирование профиля">
            <AdminProfile
              description={profile.description}
              name={profile.name}
              position={profile.position}
            />
          </AdminSection>
        </Route>
        <Route
          path="/admin/projects"
          exact>
          <AdminSection
            className="projects"
            id="projects"
            modifier="projects"
            title="Редактирование списка проектов">
            <AdminProjects
              deleteItem={deleteItem}
              editItem={editItem}
              projects={projects}
              setProjects={setProjects}
            />
          </AdminSection>
        </Route>
        <Route
          path="/admin/skills"
          exact>
          <AdminSection
            className="skills"
            id="skills"
            modifier="skills"
            title="Редактирование навыков">
            <AdminSkills
              deleteItem={deleteItem}
              editItem={editItem}
              skillsByType={skillsByType}
              skillsText={skillsText}
            />
          </AdminSection>
        </Route>
        <Route
          path="/admin/experience"
          exact>
          <AdminSection
            className="experience"
            id="experience"
            modifier="experience"
            title="Редактирование опыта работы">
            <AdminExperience
              className="admin-section"
              deleteItem={deleteItem}
              editItem={editItem}
              experience={experience}
            />
          </AdminSection>
        </Route>
        <Route
          path="/admin/contacts"
          exact>
          <AdminSection
            className="contacts"
            id="contacts"
            modifier="contacts"
            title="Редактирование контактов">
            <AdminContacts
              className="admin-section"
              contacts={contacts}
              deleteItem={deleteItem}
              editItem={editItem}
            />
          </AdminSection>
        </Route>
        {projects.map((project) => (
          <Route
            key={project.id}
            path={`/admin/projects/${project.name}`}
            exact>
            <AdminSection
              className="project"
              id="project"
              modifier="project"
              title={`Редактирование проекта "${project.title}"`}>
              <AdminProject project={project} />
            </AdminSection>
          </Route>
        ))}
        <Route
          path="/admin/skills/skill"
          exact>
          <AdminSection
            className="skill"
            id="skill"
            modifier="skill"
            title="Редактирование навыка">
            <AdminSkill />
          </AdminSection>
        </Route>
        <Route
          path="/admin/experience/item"
          exact>
          <AdminSection
            className="experience"
            id="experience"
            modifier="experience"
            title="Редактирование опыта работы">
            <AdminExperienceItem />
          </AdminSection>
        </Route>
        <Route
          path="/admin/contacts/contact"
          exact>
          <AdminSection
            className="contact"
            id="contact"
            modifier="contact"
            title="Редактирование контакта">
            <AdminContact />
          </AdminSection>
        </Route>
      </Switch>
    </>
  );
}

export default MainAdmin;
