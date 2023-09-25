import AdminSectionButtonsLocal from '../AdminSectionButtonsLocal/AdminSectionButtonsLocal.jsx';
import AdminSectionButtonAdd from '../AdminSectionButtonsAdd/AdminSectionButtonAdd.jsx';
import AdminList from '../AdminList/AdminList.jsx';
import AdminListItem from '../AdminListItem/AdminListItem.jsx';
import Contact from '../../PublicComponents/Contact/Contact.jsx';

function AdminContacts({ onClick, contacts, className }) {
  return (
    <>
      <AdminList modificator="contacts">
        {contacts.map((item) => (
          <AdminListItem
            key={item.id}
            modificator="contacts">
            <div
              className={`${className}__wrapper ${className}__wrapper_contacts`}>
              <Contact
                className="contact"
                name={item.name}
                title={item.title}
                url={item.url}
              />
            </div>
            <AdminSectionButtonsLocal onClick={onClick} />
          </AdminListItem>
        ))}
      </AdminList>
      <AdminSectionButtonAdd>Добавить контакт</AdminSectionButtonAdd>
    </>
  );
}

export default AdminContacts;
