import './_Contacts.scss';
import Contact from 'components/PublicComponents/Contact/Contact';
import List from 'components/BaseComponents/List/List';
import ListItem from 'components/BaseComponents/ListItem/ListItem';

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
