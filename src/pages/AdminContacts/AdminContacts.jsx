import AdminSectionButtonsAction from '../../components/AdminComponents/AdminSectionButtonsAction/AdminSectionButtonsAction';
import AdminList from '../../components/AdminComponents/AdminList/AdminList';
import AdminListItem from '../../components/AdminComponents/AdminListItem/AdminListItem';
import Contact from '../../components/PublicComponents/Contact/Contact';
import AdminSection from '../../components/AdminComponents/AdminSection/AdminSection';

function AdminContacts({
  contacts,
  setContacts,
  openPopup,
  saveSelectedItemData,
}) {
  return (
    <AdminSection
      className="contacts"
      id="contacts"
      modifier="contacts"
      title="Редактирование контактов">
      <AdminList modifier="contacts">
        {contacts.map((contact) => (
          <AdminListItem
            key={contact.id}
            modifier="contacts">
            <div className="admin-section__wrapper admin-section__wrapper_contacts">
              <Contact
                className="contact"
                name={contact.name}
                title={contact.title}
                url={contact.url}
              />
            </div>
            <AdminSectionButtonsAction
              currentArray={contacts}
              endpoint="contacts"
              itemId={contact.id}
              openPopup={openPopup}
              saveSelectedItemData={saveSelectedItemData}
              setState={setContacts}
            />
          </AdminListItem>
        ))}
      </AdminList>
    </AdminSection>
  );
}

export default AdminContacts;
