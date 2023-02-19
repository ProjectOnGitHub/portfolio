import React from 'react';
import Icon from '../Icon/Icon';
import './_Skill.scss';


function Skill({ name, title }) {
  return (
    <>
      <li className="skill">
        <Icon name={name} className="skill" />
        <h4 className="skill__title">{title}</h4>
      </li>



    </>
  );
}

export default Skill;
