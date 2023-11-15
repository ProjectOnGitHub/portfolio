import './_Popup.scss';
import AdminSectionButtonsChoice from 'components/AdminComponents/AdminSectionButtonsChoice/AdminSectionButtonsChoice';

function Popup({ popupIsOpen, title, confirmAction }) {
  function handleClickSaveButton() {
    confirmAction(true);
  }

  function handleClickResetButton() {
    confirmAction(false);
  }

  return (
    <section className={`${popupIsOpen ? 'popup popup_opened' : 'popup'}`}>
      <div className="popup__container">
        <h1 className="admin-section__title">{title}</h1>
        <AdminSectionButtonsChoice
          handleClickResetButton={handleClickResetButton}
          handleClickSaveButton={handleClickSaveButton}
        />
      </div>
    </section>
  );
}

export default Popup;
