import React from 'react';
import './_SkillsList.scss';
import Skill from '../Skill/Skill';
import skills from '../../utils/skills';

function SkillsList(props) {
  return (
    <div className="skills__container">
      <h3 className="skills__subtitle">{props.subtitle}</h3>
      <ul className="skills__list">
        {skills.map((item) => (
          item.type === props.type
            ? <Skill
              name={item.name}
              key={item.id}
              title={item.title}
              type={item.type}
            />
            : ""))}
      </ul>
    </div>
  );
}

export default SkillsList;
