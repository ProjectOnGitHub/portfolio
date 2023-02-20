import React from 'react';
import './_SkillsList.scss';
import Skill from '../Skill/Skill';
import ListItem from '../ListItem/ListItem';
import skills from '../../utils/skills';

function SkillsList(props) {
  return (
    <div className={`skills__container skills__container_${props.type}`}>
      <h3 className="skills__subtitle">{props.subtitle}</h3>
      <ul className="skills__list">
        {skills.map((item) => (
          item.type === props.type
            ?
            <ListItem
              className="skill"
              key={item.id}>
              <Skill
                name={item.name}
                title={item.title}
                type={item.type}
              />
            </ListItem>
            : ""))}
      </ul>
    </div>
  );
}

export default SkillsList;
