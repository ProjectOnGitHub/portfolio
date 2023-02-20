import React from 'react';
import Icon from '../Icon/Icon';
import './_Contact.scss';


function Contact({ name, title, url }) {
  return (
    <>
      <Icon name={name} className="contact" />
      <a href={url} className="contact__link">{title}</a>
    </>
  );
}

export default Contact;
