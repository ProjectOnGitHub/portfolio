import React from 'react';
import Icon from '../Icon/Icon';
import './_Skill.scss';


function Skill({ name, title }) {
  return (
    <>
      <li className="skill">
        <Icon name={name} className="skill" />
        <h3 className="skill__title">{title}</h3>
      </li>



    </>
  );
}

export default Skill;
