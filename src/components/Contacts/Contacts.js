import React from 'react';
import './_Contacts.scss';
import Contact from '../Contact/Contact';
import ListItem from '../ListItem/ListItem';
import contacts from '../../utils/contacts';

function Contacts(props) {
  return (
    <>
      <h2 className="contacts__title">{props.title}</h2>
      <ul className="contacts__list">
        {contacts.map((item) => (
          <ListItem
            className="contact"
            key={item.id}>
            <Contact
              name={item.name}
              title={item.title}
              url={item.url}
            />
          </ListItem>
        ))}
      </ul>
    </>
  );
}

export default Contacts;
