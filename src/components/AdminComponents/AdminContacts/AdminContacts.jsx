import AdminSectionButtonsAction from '../AdminSectionButtonsAction/AdminSectionButtonsAction.jsx';
import AdminList from '../AdminList/AdminList.jsx';
import AdminListItem from '../AdminListItem/AdminListItem.jsx';
import Contact from '../../PublicComponents/Contact/Contact.jsx';
import AdminSection from '../AdminSection/AdminSection.jsx';

function AdminContacts({
  contacts,
  className,
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
            <div
              className={`${className}__wrapper ${className}__wrapper_contacts`}>
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
