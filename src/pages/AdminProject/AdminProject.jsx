import AdminFormImage from 'components/AdminComponents/AdminFormImage/AdminFormImage';
import AdminFormInput from 'components/AdminComponents/AdminFormInput/AdminFormInput';
import AdminFormTextarea from 'components/AdminComponents/AdminFormTextarea/AdminFormTextarea';
import List from 'components/BaseComponents/List/List';
import ListItem from 'components/BaseComponents/ListItem/ListItem';
import Icon from 'components/BaseComponents/Icon/Icon';
import Button from 'components/BaseComponents/Button/Button';
import AdminSection from 'components/AdminComponents/AdminSection/AdminSection';
import useItemInfo from 'hooks/useItemInfo';
import useNewItem from 'hooks/useNewItem';

function AdminProject({ onClick, openPopupSaveData }) {
  const item = useItemInfo();
  const { newItem, handleChangeInput } = useNewItem(item);

  return (
    <AdminSection
      className="project"
      id="project"
      modifier="project"
      title={`Редактирование проекта "${item.title}"`}>
      <AdminFormImage openPopup={openPopupSaveData}>
        <fieldset className="admin-form__fieldset">
          <AdminFormInput
            label="Название проекта"
            name="title"
            placeholder="Название проекта"
            required={true}
            type="text"
            value={newItem.title || ''}
            onChange={handleChangeInput}
          />
          <AdminFormInput
            label="Алиас проекта"
            name="name"
            placeholder="Алиас проекта"
            required={true}
            type="text"
            value={newItem.name || ''}
            onChange={handleChangeInput}
          />
          <AdminFormInput
            label="Ссылка на сайт"
            name="url"
            placeholder="Ссылка на сайт"
            required={false}
            type="url"
            value={newItem.url || ''}
            onChange={handleChangeInput}
          />
          <AdminFormInput
            label="Ссылка на GitHub"
            name="githubUrl"
            placeholder="Ссылка на GitHub"
            required={false}
            type="url"
            value={newItem.githubUrl || ''}
            onChange={handleChangeInput}
          />
          <div className="admin-form__wrapper">
            <AdminFormInput
              label="Добавить технологии"
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
            label="Добавить описание"
            name="description"
            placeholder="Добавить описание"
            required={true}
            value={newItem.description || ''}
            onChange={handleChangeInput}
          />
        </fieldset>
      </AdminFormImage>
    </AdminSection>
  );
}

export default AdminProject;
