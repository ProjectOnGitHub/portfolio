import SectionForm from '../SectionForm/SectionForm.jsx';

function Login() {
  return (
    <>
      <SectionForm
        ankor='Зарегистрироваться'
        aria-label='Login button'
        buttonText='Войти'
        className='form__button'
        name='button-register'
        text='Нет регистрации?'
        title='Войти'
        type='submit'
        url='register'>
        <label className='form__label'>
          E-mail
          <input
            autoComplete='on'
            className='form__input'
            id='email-input'
            maxLength='40'
            minLength='6'
            name='email'
            type='email'
            value='E-mail'
            required
          />
        </label>
        <label className='form__label'>
          Пароль
          <input
            autoComplete='current-password'
            className='form__input'
            id='password-input'
            maxLength='16'
            minLength='6'
            name='password'
            type='password'
            value='Пароль'
            required
          />
        </label>
      </SectionForm>
    </>
  );
}

export default Login;
