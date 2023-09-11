import React from 'react';
import AdminSection from '../AdminSection/AdminSection.jsx';
import AdminProfile from '../AdminProfile/AdminProfile.jsx';

function MainAdmin() {
  return (
    <AdminSection
      className='profile'
      modificator='position'
      title='Редактирование профиля'>
      <AdminProfile />
    </AdminSection>
  );
}

export default MainAdmin;
