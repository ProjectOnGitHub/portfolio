import React from 'react';
import Section from '../Section/Section.jsx';
import AdminProfile from '../AdminProfile/AdminProfile.jsx';

function MainAdmin() {
  return (
    <Section
      className='admin-profile'
      id='admin-profile'>
      <AdminProfile title='Редактирование профиля' />
    </Section>
  );
}

export default MainAdmin;
