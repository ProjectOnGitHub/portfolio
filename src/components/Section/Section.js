import React from 'react';
import './_Section.scss';

function Section(props) {
  return (
    <section
      className={`section ${props.className}`}
      id={`${props.id}`}>
      {props.children}
    </section>
  );
}

export default Section;

