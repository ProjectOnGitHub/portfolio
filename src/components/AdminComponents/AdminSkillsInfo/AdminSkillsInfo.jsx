import AdminForm from 'components/AdminComponents/AdminForm/AdminForm';
import AdminSection from 'components/AdminComponents/AdminSection/AdminSection';
import useItemInfo from 'hooks/useItemInfo';
import Editor from 'components/BaseComponents/Editor/Editor';
import useNewItem from 'hooks/useNewItem';
import usePopup from 'hooks/usePopup';

function AdminSkillsInfo({ endpoint }) {
  const info = useItemInfo('skills-info');
  const { currentPopup, openPopup, items, confirmSaveItem, setSelectedItem } =
    usePopup('skills-info', info);
  const { newItem, handleChangeInput } = useNewItem(items);

  return (
    <AdminSection
      className="skills"
      confirmAction={confirmSaveItem}
      currentPopup={currentPopup}
      id="skills-info"
      modifier="skills"
      title="Редактирование навыков">
      <AdminForm
        currentItem={info}
        endpoint={endpoint}
        item={newItem}
        modifier="middle"
        openPopup={openPopup}
        saveSelectedItemData={setSelectedItem}>
        <fieldset className="admin-form__fieldset">
          <legend className="admin-form__legend">
            Редактировать описание раздела Навыки
          </legend>
          <Editor
            currentValue={newItem.description}
            handleChangeInput={handleChangeInput}
            name="description"
          />
        </fieldset>
      </AdminForm>
    </AdminSection>
  );
}

export default AdminSkillsInfo;
