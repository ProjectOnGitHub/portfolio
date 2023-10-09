import './_Contacts.scss';
import Contact from '../Contact/Contact.jsx';
import List from '../../BaseComponents/List/List.jsx';
import ListItem from '../../BaseComponents/ListItem/ListItem.jsx';

function Contacts({ contacts, title }) {
  return (
    <>
      <h2 className="contacts__title">{title}</h2>
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
