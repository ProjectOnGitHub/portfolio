import { Route, Switch } from 'react-router-dom';
import AdminContact from '../AdminContact/AdminContact.jsx';
import AdminContacts from '../AdminContacts/AdminContacts.jsx';
import AdminExperience from '../AdminExperience/AdminExperience.jsx';
import AdminExperienceItem from '../AdminExperienceItem/AdminExperienceItem.jsx';
import AdminPages from '../AdminPages/AdminPages.jsx';
import AdminProfile from '../AdminProfile/AdminProfile.jsx';
import AdminProject from '../AdminProject/AdminProject.jsx';
import AdminProjects from '../AdminProjects/AdminProjects.jsx';
import AdminSection from '../AdminSection/AdminSection.jsx';
import AdminSkill from '../AdminSkill/AdminSkill.jsx';
import AdminSkills from '../AdminSkills/AdminSkills.jsx';
import Popup from '../../BaseComponents/Popup/Popup.jsx';
import AdminPopupDeleteItem from '../AdminPopupDeleteItem/AdminPopupDeleteItem.jsx';

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
  confirmDeleteItem,
  openPopup,
  saveSelectedItemData,
  togglePageVisibility,
  popupIsOpen,
}) {
  return (
    <>
      <Switch>
        <Route
          path="/admin"
          exact>
          <AdminSection
            className="pages"
            id="pages"
            modifier="pages"
            title="Редактирование списка страниц">
            <AdminPages
              className="pages"
              pages={pages}
              togglePageVisibility={togglePageVisibility}
            />
          </AdminSection>
        </Route>
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
              openPopup={openPopup}
              projects={projects}
              saveSelectedItemData={saveSelectedItemData}
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
              openPopup={openPopup}
              saveSelectedItemData={saveSelectedItemData}
              setSkills={setSkills}
              setSkillsText={setSkillsText}
              skills={skills}
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
              experience={experience}
              openPopup={openPopup}
              saveSelectedItemData={saveSelectedItemData}
              setExperience={setExperience}
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
              openPopup={openPopup}
              saveSelectedItemData={saveSelectedItemData}
              setContacts={setContacts}
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
      <Popup popupIsOpen={popupIsOpen}>
        <AdminPopupDeleteItem
          confirmDeleteItem={confirmDeleteItem}
          title="Удалить элемент?"
        />
      </Popup>
    </>
  );
}

export default MainAdmin;
