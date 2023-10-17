import Popup from 'components/BaseComponents/Popup/Popup';

function AdminPopupSaveData({ popupSaveDataIsOpen, confirmSaveData }) {
  return (
    <Popup
      confirmAction={confirmSaveData}
      popupIsOpen={popupSaveDataIsOpen}
      title="Сохранить изменения?"
    />
  );
}

export default AdminPopupSaveData;
