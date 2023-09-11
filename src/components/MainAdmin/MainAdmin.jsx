import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AdminSection from '../AdminSection/AdminSection.jsx';
import AdminProfile from '../AdminProfile/AdminProfile.jsx';
import AdminProjects from '../AdminProjects/AdminProjects.jsx';

function MainAdmin() {
  return (
    <>
      <Switch>
        <Route path='/admin/profile'>
          <AdminSection
            className='profile'
            id='profile'
            modificator='profile'
            title='Редактирование профиля'>
            <AdminProfile />
          </AdminSection>
        </Route>
        <Route path='/admin/projects'>
          <AdminSection
            className='projects'
            id='projects'
            modificator='projects'
            title='Редактирование списка проектов'>
            <AdminProjects />
          </AdminSection>
        </Route>
        <Route path='/admin/skills'>
          <AdminSection
            className='skills'
            id='skills'
            modificator='skills'
            title='Редактирование навыков'></AdminSection>
        </Route>
        <Route path='/admin/experience'>
          <AdminSection
            className='experience'
            id='experience'
            modificator='experience'
            title='Редактирование опыта работы'></AdminSection>
        </Route>
        <Route path='/admin/contacts'>
          <AdminSection
            className='contacts'
            id='contacts'
            modificator='contacts'
            title='Редактирование контактов'></AdminSection>
        </Route>
      </Switch>
    </>
  );
}

export default MainAdmin;
