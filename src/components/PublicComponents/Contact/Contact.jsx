import { useContext } from 'react';
import './_Contact.scss';
import Icon from '../../BaseComponents/Icon/Icon.jsx';
import DarkThemeContext from '../../../contexts/DarkThemeContext.jsx';

function Contact({ className, name, title, url }) {
  const { isDarkTheme } = useContext(DarkThemeContext);
  const classNameIcon = isDarkTheme
    ? `${className}__list-item icon__${className}_theme-dark`
    : `${className}`;

  const classNameLink = isDarkTheme
    ? `${className}__link ${className}__link_theme-dark`
    : `${className}__link`;

  return (
    <>
      <Icon
        className={classNameIcon}
        name={name}
      />
      <a
        className={classNameLink}
        href={url}>
        {title}
      </a>
    </>
  );
}

export default Contact;
