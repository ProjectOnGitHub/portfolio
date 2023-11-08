import Contact from 'components/PublicComponents/Contact/Contact';
import List from 'components/BaseComponents/List/List';
import ListItem from 'components/BaseComponents/ListItem/ListItem';
import Section from 'components/PublicComponents/Section/Section';

import './_Contacts.scss';

function Contacts({ contacts }) {
  return (
    <Section
      className="contacts"
      id="contacts">
      <h2 className="contacts__title">Контакты</h2>
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
    </Section>
  );
}

export default Contacts;
