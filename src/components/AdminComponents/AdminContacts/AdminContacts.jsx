import AdminSectionButtonsLocal from '../AdminSectionButtonsLocal/AdminSectionButtonsLocal.jsx';
import AdminSectionButtonAdd from '../AdminSectionButtonsAdd/AdminSectionButtonAdd.jsx';
import AdminList from '../AdminList/AdminList.jsx';
import AdminListItem from '../AdminListItem/AdminListItem.jsx';
import Contact from '../../PublicComponents/Contact/Contact.jsx';

function AdminContacts({ contacts, className, deleteItem, editItem }) {
  return (
    <>
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
            <AdminSectionButtonsLocal
              deleteItem={deleteItem}
              editItem={editItem}
              item={contact}
            />
          </AdminListItem>
        ))}
      </AdminList>
      <AdminSectionButtonAdd>Добавить контакт</AdminSectionButtonAdd>
    </>
  );
}

export default AdminContacts;
