import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AdminSection from '../AdminSection/AdminSection.jsx';
import AdminProfile from '../AdminProfile/AdminProfile.jsx';

function MainAdmin() {
  return (
    <>
      <Switch>
        <Route path='/admin/profile'>
          <AdminSection
            className='profile'
            modificator='position'
            title='Редактирование профиля'>
            <AdminProfile />
          </AdminSection>
        </Route>
        <Route path='/admin/projects'>
          <AdminSection
            className='projects'
            title='Редактирование списка проектов'></AdminSection>
        </Route>
        <Route path='/admin/skills'>
          <AdminSection
            className='skills'
            title='Редактирование навыков'></AdminSection>
        </Route>
        <Route path='/admin/experience'>
          <AdminSection
            className='experience'
            title='Редактирование опыта работы'></AdminSection>
        </Route>
        <Route path='/admin/contacts'>
          <AdminSection
            className='contacts'
            title='Редактирование контактов'></AdminSection>
        </Route>
      </Switch>
    </>
  );
}

export default MainAdmin;
