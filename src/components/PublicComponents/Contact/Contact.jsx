import { useContext } from 'react';
import './_Contact.scss';
import Icon from '../../BaseComponents/Icon/Icon.jsx';
import DarkThemeContext from '../../../contexts/DarkThemeContext.jsx';

function Contact({ name, title, url }) {
  const { isDarkTheme } = useContext(DarkThemeContext);

  return (
    <>
      <Icon
        className={isDarkTheme ? 'contact icon__contact_theme-dark' : 'contact'}
        name={name}
      />
      <a
        href={url}
        className={
          isDarkTheme
            ? 'contact__link contact__link_theme-dark'
            : 'contact__link'
        }>
        {title}
      </a>
    </>
  );
}

export default Contact;
