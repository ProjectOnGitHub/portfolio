import React from 'react';
import Icon from '../Icon/Icon';
import './_Skill.scss';


function Skill({ name, title }) {
  return (
    <>
      <Icon name={name} className="skill" />
      <h4 className="skill__title">{title}</h4>
    </>
  );
}

export default Skill;
