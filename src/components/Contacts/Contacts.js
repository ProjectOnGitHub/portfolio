import React from 'react';
import Contact from '../Contact/Contact';
import './_Contacts.scss';
import contacts from '../../utils/contacts';


function Contacts(props) {
  return (
    <>
      <h2 className="contacts__title">{props.title}</h2>
      <ul className="contacts__list">
        {contacts.map((item) => (
          <Contact
            name={item.name}
            key={item.id}
            title={item.title}
            url={item.url}
          />
        ))}
      </ul>

    </>
  );
}

export default Contacts;
