import './_Contacts.scss';
import Contact from '../Contact/Contact.jsx';
import List from '../../BaseComponents/List/List.jsx';
import ListItem from '../../BaseComponents/ListItem/ListItem.jsx';
import contacts from '../../../utils/contacts';

function Contacts(props) {
  return (
    <>
      <h2 className="contacts__title">{props.title}</h2>
      <List className="contacts__list">
        {contacts.map((item) => (
          <ListItem
            key={item.id}
            className="contact">
            <Contact
              className="contact"
              name={item.name}
              title={item.title}
              url={item.url}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default Contacts;
