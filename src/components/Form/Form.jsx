import { React } from 'react';
import './_Form.scss';
import { Link } from 'react-router-dom';

function SectionForm(props) {
  return (
    <form
      className='form__container'
      name={props.name}
      noValidate
      onSubmit={props.handleSubmit}>
      <h1 className='form__title'>{props.title}</h1>
      <fieldset className='form__fieldset'>{props.children}</fieldset>
      <button
        className={props.submitButtonClassName}
        disabled={props.disabled}
        type='submit'>
        {props.buttonText}
      </button>
      <span className='form__text'>
        {props.text}{' '}
        <Link
          className='form__link hover-effect'
          to={`/${props.url}`}>
          {props.ankor}
        </Link>
      </span>
    </form>
  );
}

export default SectionForm;
