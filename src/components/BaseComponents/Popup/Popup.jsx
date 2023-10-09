import List from '../List/List.jsx';
import ListItem from '../ListItem/ListItem.jsx';
import Button from '../Button/Button.jsx';
import './_Popup.scss';

function Popup({ name, confirmDeleteItem, popupIsOpen }) {
  function handleClickSaveButton() {
    confirmDeleteItem(true);
  }

  function handleClickResetButton() {
    confirmDeleteItem(false);
  }

  return (
    <section
      className={`popup popup_type-${name} ${popupIsOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <h1 className="admin-section__title">
          Вы действительно хотите удалить элемент?
        </h1>
        <List
          className="admin-section__buttons"
          modifier="global">
          <ListItem className="admin-section__buttons-item">
            <Button
              aria-label="Save button"
              className="admin-section__button admin-section__button_save"
              name="button-save"
              type="button"
              onClick={handleClickSaveButton}>
              Да
            </Button>
          </ListItem>
          <ListItem className="admin-section__buttons-item">
            <Button
              aria-label="Reset button"
              className="admin-section__button admin-section__button_reset"
              name="button-reset"
              type="button"
              onClick={handleClickResetButton}>
              Нет
            </Button>
          </ListItem>
        </List>
      </div>
    </section>
  );
}

export default Popup;
