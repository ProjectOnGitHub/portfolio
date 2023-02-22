import React from 'react';
import './_Skills.scss';
import SkillsList from '../SkillsList/SkillsList.jsx';

function Skills(props) {
  return (
    <>
      <h2 className="skills__title">{props.title}</h2>
      <SkillsList
        subtitle="Языки"
        type="language"
      />
      <SkillsList
        subtitle="Библиотеки и Фреймворки"
        type="library"
      />
      <SkillsList
        subtitle="Системы управления содержимым"
        type="cms"
      />
      <SkillsList
        subtitle="Инструменты"
        type="tool"
      />
    </>
  );
}

export default Skills;
