import Popup from 'components/BaseComponents/Popup/Popup';

function AdminPopupDeleteItem({ confirmAction }) {
  return (
    <Popup
      confirmAction={confirmAction}
      title="Удалить элемент?"
    />
  );
}

export default AdminPopupDeleteItem;
