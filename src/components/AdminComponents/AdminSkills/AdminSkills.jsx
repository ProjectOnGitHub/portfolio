import { Link } from 'react-router-dom';
import AdminForm from '../AdminForm/AdminForm.jsx';
import AdminFormTextarea from '../AdminFormTextarea/AdminFormTextarea.jsx';
import Button from '../../BaseComponents/Button/Button.jsx';
import Icon from '../../BaseComponents/Icon/Icon.jsx';
import ListItem from '../../BaseComponents/ListItem/ListItem.jsx';
import AdminSkillsList from '../AdminSkillsList/AdminSkillsList.jsx';
import './_AdminSkills.scss';

function AdminSkills({ onClick, skillsByType }) {
  return (
    <>
      <AdminForm modificator="middle">
        <fieldset className="admin-form__fieldset">
          <legend className="admin-form__legend">
            Редактировать описание раздела Навыки
          </legend>
          <AdminFormTextarea
            name="description"
            placeholder="Добавить описание"
            required={true}
          />
        </fieldset>
      </AdminForm>

      {Object.values(skillsByType).map((group) => (
        <AdminSkillsList
          key={group.type}
          title={group.sectionTitle}>
          {group.skills.map((item) => (
            <ListItem
              key={item.id}
              className="admin-skills__list-item">
              <Link
                className="admin-skills__link"
                to="/admin/skills/skill">
                <Icon
                  className="admin-skills"
                  modificator={item.name}
                  name={item.name}
                />
                <span className="admin-skills__list-title">{item.title}</span>
              </Link>
            </ListItem>
          ))}
          <li className="admin-skills__list-item">
            <Button
              aria-label="Edit button"
              className="admin-projects__button admin-projects__button_add"
              name="button-edit"
              type="submit"
              onClick={onClick}>
              <Icon
                className="add"
                name="add"
              />
            </Button>
          </li>
        </AdminSkillsList>
      ))}
    </>
  );
}

export default AdminSkills;
