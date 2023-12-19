import Popup from 'components/BaseComponents/Popup/Popup';

function AdminPopupSaveData({ popupSaveDataIsOpen, confirmAction }) {
  return (
    <Popup
      confirmAction={confirmAction}
      popupIsOpen={popupSaveDataIsOpen}
      title="Сохранить изменения?"
    />
  );
}

export default AdminPopupSaveData;
