import React from 'react';
import './_AdminSection.scss';

function AdminSection(props) {
  return (
    <section
      className={`section admin-section admin-section__${props.className}`}
      id={`admin-${props.className}`}>
      <h1 className='admin-section__title'>{props.title}</h1>
      <div
        className={
          props.modificator
            ? `admin-section__container admin-section__container_${props.modificator}`
            : `admin-section__container`
        }>
        {props.children}
      </div>
    </section>
  );
}

export default AdminSection;
