import Popup from 'components/BaseComponents/Popup/Popup';

function AdminPopupDeleteItem({ popupDeleteIsOpen, confirmDeleteItem }) {
  return (
    <Popup
      confirmAction={confirmDeleteItem}
      popupIsOpen={popupDeleteIsOpen}
      title="Удалить элемент?"
    />
  );
}

export default AdminPopupDeleteItem;
