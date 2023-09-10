import React from 'react';
import './_Register.scss';
import Form from '../Form/Form.jsx';

function Register() {
  return (
    <>
      <Form
        ankor='Войти'
        buttonText='Подтвердить'
        text='Уже зарегистрированы?'
        title='Зарегистрироваться'
        url='login'>
        <label className='form__label'>Имя</label>
        <input
          autoComplete='on'
          className='form__input'
          id='name-input'
          maxLength='30'
          minLength='2'
          name='name'
          type='text'
          value='Value'
          required
        />
        <label className='form__label'>E-mail</label>
        <input
          autoComplete='on'
          className='form__input'
          id='email-input'
          maxLength='40'
          minLength='6'
          name='email'
          type='email'
          value='Value'
          required
        />

        <label className='form__label'>Пароль</label>
        <input
          autoComplete='current-password'
          className='form__input'
          id='password-input'
          maxLength='16'
          minLength='6'
          name='password'
          type='password'
          value='Value'
          required
        />
      </Form>
    </>
  );
}

export default Register;
