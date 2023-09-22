import { Route, Switch } from 'react-router-dom';
import AdminSection from '../AdminSection/AdminSection.jsx';
import AdminProfile from '../AdminProfile/AdminProfile.jsx';
import AdminProjects from '../AdminProjects/AdminProjects.jsx';
import AdminProject from '../AdminProject/AdminProject.jsx';
import AdminSkills from '../AdminSkills/AdminSkills.jsx';
import AdminSkill from '../AdminSkill/AdminSkill.jsx';

function MainAdmin() {
  return (
    <>
      <Switch>
        <Route
          path="/admin/profile"
          exact>
          <AdminSection
            className="profile"
            id="profile"
            modificator="profile"
            title="Редактирование профиля">
            <AdminProfile />
          </AdminSection>
        </Route>
        <Route
          path="/admin/projects"
          exact>
          <AdminSection
            className="projects"
            id="projects"
            modificator="projects"
            title="Редактирование списка проектов">
            <AdminProjects />
          </AdminSection>
        </Route>
        <Route
          path="/admin/skills"
          exact>
          <AdminSection
            className="skills"
            id="skills"
            modificator="skills"
            title="Редактирование навыков">
            <AdminSkills />
          </AdminSection>
        </Route>
        <Route
          path="/admin/experience"
          exact>
          <AdminSection
            className="experience"
            id="experience"
            modificator="experience"
            title="Редактирование опыта работы"
          />
        </Route>
        <Route
          path="/admin/contacts"
          exact>
          <AdminSection
            className="contacts"
            id="contacts"
            modificator="contacts"
            title="Редактирование контактов"
          />
        </Route>
        <Route
          path="/admin/projects/project"
          exact>
          <AdminSection
            className="project"
            id="project"
            modificator="project"
            title="Редактирование проекта">
            <AdminProject />
          </AdminSection>
        </Route>

        <Route
          path="/admin/skills/skill"
          exact>
          <AdminSection
            className="skill"
            id="skill"
            modificator="skill"
            title="Редактирование навыка">
            <AdminSkill />
          </AdminSection>
        </Route>
      </Switch>
    </>
  );
}

export default MainAdmin;
