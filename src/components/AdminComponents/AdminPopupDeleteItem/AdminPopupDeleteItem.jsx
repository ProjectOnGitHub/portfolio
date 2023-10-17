import Popup from 'components/BaseComponents/Popup/Popup';

function AdminPopupDeleteItem({ popupIsOpen, confirmDeleteItem }) {
  return (
    <Popup
      confirmAction={confirmDeleteItem}
      popupIsOpen={popupIsOpen}
      title="Удалить элемент?"
    />
  );
}

export default AdminPopupDeleteItem;
