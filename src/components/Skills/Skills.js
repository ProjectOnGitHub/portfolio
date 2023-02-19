import React from 'react';
import './_Skills.scss';
import SkillsList from '../SkillsList/SkillsList';

function Skills() {
  return (
    <>
      <h2 className="skills__title">Skills</h2>
      <SkillsList
        subtitle="Languages"
        type="language"
      />
      <SkillsList
        subtitle="Libraries & Frameworks"
        type="library"
      />
      <SkillsList
        subtitle="Content Managment Systems"
        type="cms"
      />
      <SkillsList
        subtitle="Tools"
        type="tool"
      />
    </>
  );
}

export default Skills;
