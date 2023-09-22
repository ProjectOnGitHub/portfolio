import './_SectionForm.scss';
import { Link } from 'react-router-dom';
import Button from '../../BaseComponents/Button/Button.jsx';

function SectionForm(props) {
  return (
    <section className="section__form">
      <form
        className="form"
        name={props.name}
        onSubmit={props.handleSubmit}>
        <h1 className="form__title">{props.title}</h1>
        <fieldset className="form__fieldset">{props.children}</fieldset>
        <Button
          aria-label={props.ariaLabel}
          className={props.className}
          name={props.name}
          type={props.type}
          onClick={props.onClick}>
          {props.buttonText}
        </Button>
        <div className="form__description">
          <span className="form__text">
            {props.text}{' '}
            <Link
              className="form__link"
              to={`/${props.url}`}>
              {props.ankor}
            </Link>
          </span>
          <Link
            className="form__link"
            to="/">
            Вернуться на главную
          </Link>
        </div>
      </form>
    </section>
  );
}

export default SectionForm;
