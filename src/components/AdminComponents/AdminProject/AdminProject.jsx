import AdminFormImage from '../AdminFormImage/AdminFormImage.jsx';
import AdminFormInput from '../AdminFormInput/AdminFormInput.jsx';
import AdminFormTextarea from '../AdminFormTextarea/AdminFormTextarea.jsx';
import List from '../../BaseComponents/List/List.jsx';
import ListItem from '../../BaseComponents/ListItem/ListItem.jsx';
import Icon from '../../BaseComponents/Icon/Icon.jsx';
import Button from '../../BaseComponents/Button/Button.jsx';
import AdminSection from '../AdminSection/AdminSection.jsx';

function AdminProject({ onClick, project }) {
  return (
    <AdminSection
      className="project"
      id="project"
      modifier="project"
      title={`Редактирование проекта "${project.title}"`}>
      <AdminFormImage>
        <fieldset className="admin-form__fieldset">
          <legend className="admin-form__legend">
            Редактировать данные проекта
          </legend>
          <AdminFormInput
            name="name"
            placeholder="Название проекта"
            required={true}
            type="text"
            value={project.title}
          />
          <AdminFormInput
            name="alias"
            placeholder="Алиас проекта"
            required={true}
            type="text"
            value={project.name}
          />
          <AdminFormInput
            name="site"
            placeholder="Ссылка на сайт"
            required={false}
            type="url"
            value={project.url}
          />
          <AdminFormInput
            name="github"
            placeholder="Ссылка на GitHub"
            required={false}
            type="url"
            value={project.githubUrl}
          />
          <div className="admin-form__wrapper">
            <AdminFormInput
              placeholder="Добавить технологии"
              required={true}
              type="text"
            />
            <List className="admin-form__tags">
              {project.stack.map((stack) => (
                <ListItem
                  key={stack}
                  className="admin-form__tags-item">
                  <Button
                    aria-label="Edit button"
                    className="admin-form__button admin-form__button_tag"
                    name="button-edit"
                    type="submit"
                    onClick={onClick}>
                    {stack}
                    <Icon
                      className="delete icon__delete_tag"
                      name="trash"
                    />
                  </Button>
                </ListItem>
              ))}
            </List>
          </div>
          <AdminFormTextarea
            name="description"
            placeholder="Добавить описание"
            required={true}
            value={project.description}
          />
        </fieldset>
      </AdminFormImage>
    </AdminSection>
  );
}

export default AdminProject;
