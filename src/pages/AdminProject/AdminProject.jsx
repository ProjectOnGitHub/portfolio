import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getItemInfo } from 'utils/api';
import AdminFormImage from 'components/AdminComponents/AdminFormImage/AdminFormImage';
import AdminFormInput from 'components/AdminComponents/AdminFormInput/AdminFormInput';
import AdminFormTextarea from 'components/AdminComponents/AdminFormTextarea/AdminFormTextarea';
import List from 'components/BaseComponents/List/List';
import ListItem from 'components/BaseComponents/ListItem/ListItem';
import Icon from 'components/BaseComponents/Icon/Icon';
import Button from 'components/BaseComponents/Button/Button';
import AdminSection from 'components/AdminComponents/AdminSection/AdminSection';

function AdminProject({ onClick, openPopupSaveData }) {
  const { id } = useParams();

  const [item, setItem] = useState({});
  useEffect(() => {
    getItemInfo('projects', id).then((newItem) => setItem(newItem));
  }, [item]);
  return (
    <AdminSection
      className="project"
      id="project"
      modifier="project"
      title={`Редактирование проекта "${item.title}"`}>
      <AdminFormImage openPopup={openPopupSaveData}>
        <fieldset className="admin-form__fieldset">
          <legend className="admin-form__legend">
            Редактировать данные проекта
          </legend>
          <AdminFormInput
            name="name"
            placeholder="Название проекта"
            required={true}
            type="text"
            value={item.title}
          />
          <AdminFormInput
            name="alias"
            placeholder="Алиас проекта"
            required={true}
            type="text"
            value={item.name}
          />
          <AdminFormInput
            name="site"
            placeholder="Ссылка на сайт"
            required={false}
            type="url"
            value={item.url}
          />
          <AdminFormInput
            name="github"
            placeholder="Ссылка на GitHub"
            required={false}
            type="url"
            value={item.githubUrl}
          />
          <div className="admin-form__wrapper">
            <AdminFormInput
              placeholder="Добавить технологии"
              required={true}
              type="text"
            />
            <List className="admin-form__tags">
              {item.stack &&
                item.stack.map((stack, i) => (
                  <ListItem
                    key={i}
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
            value={item.description}
          />
        </fieldset>
      </AdminFormImage>
    </AdminSection>
  );
}

export default AdminProject;
