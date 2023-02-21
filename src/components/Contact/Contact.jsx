import React from 'react';
import './_Contact.scss';
import Icon from '../Icon/Icon';

function Contact({ name, title, url }) {
  return (
    <>
      <Icon
        className="contact"
        name={name}
      />
      <a
        className="contact__link"
        href={url}
      >
        {title}
      </a>
    </>
  );
}

export default Contact;
