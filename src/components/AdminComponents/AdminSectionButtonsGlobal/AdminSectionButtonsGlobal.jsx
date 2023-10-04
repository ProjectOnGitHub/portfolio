import List from '../../BaseComponents/List/List.jsx';
import ListItem from '../../BaseComponents/ListItem/ListItem.jsx';
import Button from '../../BaseComponents/Button/Button.jsx';

function AdminSectionButtonsGlobal({ onClick }) {
  return (
    <List
      className="admin-section__buttons"
      modifier="global">
      <ListItem className="admin-section__buttons-item">
        <Button
          aria-label="Reset button"
          className="admin-section__button admin-section__button_reset"
          name="button-reset"
          type="submit"
          onClick={onClick}>
          Сбросить изменения
        </Button>
      </ListItem>
      <ListItem className="admin-section__buttons-item">
        <Button
          aria-label="Save button"
          className="admin-section__button admin-section__button_save"
          name="button-save"
          type="submit"
          onClick={onClick}>
          Сохранить изменения
        </Button>
      </ListItem>
    </List>
  );
}

export default AdminSectionButtonsGlobal;
