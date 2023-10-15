import { useContext } from 'react';
import Icon from '../../BaseComponents/Icon/Icon';
import DarkThemeContext from '../../../contexts/DarkThemeContext';

function Contact({ className, name, title, url }) {
  const { isDarkTheme } = useContext(DarkThemeContext);
  const classNameIcon = isDarkTheme
    ? `${className} icon__${className}_theme-dark`
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
