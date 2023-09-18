import { React } from 'react';
import './_AdminSkillsList.scss';

function AdminSkillsList({ children, title }) {
  return (
    <>
      <h2 className='admin-section__subtitle'>{title}</h2>
      <ul className='admin-skills__list'>{children}</ul>
    </>
  );
}

export default AdminSkillsList;
