import React from 'react';
import AdminForm from '../AdminForm/AdminForm.jsx';
import AdminFormTextarea from '../AdminFormTextarea/AdminFormTextarea.jsx';
import Button from '../Button/Button.jsx';
import Icon from '../Icon/Icon.jsx';
import ListItem from '../ListItem/ListItem.jsx';
import AdminSkillsList from '../AdminSkillsList/AdminSkillsList.jsx';
import skills from '../../utils/skills';
import './_AdminSkills.scss';

function AdminSkills({ onClick }) {
  const groupedSkills = {};

  skills.forEach((skill) => {
    if (!groupedSkills[skill.type]) {
      groupedSkills[skill.type] = [];
    }
    groupedSkills[skill.type].push(skill);
  });

  return (
    <>
      <AdminForm modificator='middle'>
        <fieldset className='admin-form__fieldset'>
          <legend className='admin-form__legend'>
            Редактировать описание раздела Навыки
          </legend>
          <AdminFormTextarea
            className='admin-form__textarea'
            maxLength='250'
            minLength='80'
            name='text'
            placeholder='Добавить описание'
            required={true}
            rows='5'
          />
        </fieldset>
      </AdminForm>

      {Object.keys(groupedSkills).map((type) => (
        <AdminSkillsList
          key={type}
          title={type}>
          {groupedSkills[type].map((item) => (
            <ListItem
              key={item.id}
              className='admin-skills__list-item'>
              <Icon
                className='admin-skills'
                modificator={item.name}
                name={item.name}
              />
              <span className='admin-skills__list-title'>{item.title}</span>
            </ListItem>
          ))}
          <li className='admin-skills__list-item'>
            <Button
              aria-label='Edit button'
              className='admin-projects__button admin-projects__button_add'
              name='button-edit'
              type='submit'
              onClick={onClick}>
              <Icon
                className='add'
                name='add'
              />
            </Button>
          </li>
        </AdminSkillsList>
      ))}
    </>
  );
}

export default AdminSkills;
