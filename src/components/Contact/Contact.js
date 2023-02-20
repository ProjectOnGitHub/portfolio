import React from 'react';
import './_Contact.scss';
import Icon from '../Icon/Icon';

function Contact({ name, title, url }) {
  return (
    <>
      <Icon name={name} className="contact" />
      <a href={url} className="contact__link">{title}</a>
    </>
  );
}

export default Contact;
