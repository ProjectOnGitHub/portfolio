import React from 'react';
import './_Skills.scss';
import Skill from '../Skill/Skill';
import skills from '../../utils/skills';

function Skills() {
  return (
    <>
      <h2 className="skills__title">Skills</h2>
      <ul className="skills__list">
        {
          skills.map((item) => (
            <Skill
              name={item.name}
              key={item.id}
              title={item.title} />))
        }

      </ul>

    </>
  );
}

export default Skills;
