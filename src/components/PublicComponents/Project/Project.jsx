import { useContext } from 'react';
import Icon from '../../BaseComponents/Icon/Icon.jsx';
import List from '../../BaseComponents/List/List.jsx';
import ListItem from '../../BaseComponents/ListItem/ListItem.jsx';
import imagesMap from '../../../utils/images';
import './_Project.scss';
import DarkThemeContext from '../../../contexts/DarkThemeContext.jsx';

function Project(props) {
  const { isDarkTheme } = useContext(DarkThemeContext);

  return (
    <>
      <figure className="project__figure">
        <img
          alt={props.title}
          className="project__image"
          src={imagesMap[`./${[props.image]}`]}
        />
        <figcaption
          className={
            isDarkTheme
              ? 'project__title project__title_theme-dark'
              : 'project__title'
          }>
          {props.title}
        </figcaption>
        <a
          className="project__link project__link_image"
          href={props.url ? props.url : props.githubUrl}
          rel="noreferrer"
          target="_blank"></a>
      </figure>
      <div className="project__text">
        <p className="project__paragraph">{props.description}</p>

        <List className="project__list">
          {props.stack
            .sort((a, b) => a.localeCompare(b))
            .map((item) => (
              <ListItem
                key={item}
                className="project__list-item">
                {item}
              </ListItem>
            ))}
        </List>
      </div>
      <List className="project__links">
        {props.url && (
          <ListItem className="project__links-item">
            <Icon
              name="link"
              className={
                isDarkTheme
                  ? 'project-link icon__project-link_theme-dark'
                  : 'project-link'
              }
            />
            <a
              href={props.url}
              rel="noreferrer"
              target="_blank"
              className={
                isDarkTheme
                  ? 'project__link project__link_text project__link_theme-dark'
                  : 'project__link project__link_text'
              }>
              Cайт
            </a>
          </ListItem>
        )}
        {props.githubUrl && (
          <ListItem className="project__links-item">
            <Icon
              name="github"
              className={
                isDarkTheme
                  ? 'project-link icon__project-link_theme-dark'
                  : 'project-link'
              }
            />
            <a
              href={props.githubUrl}
              rel="noreferrer"
              target="_blank"
              className={
                isDarkTheme
                  ? 'project__link project__link_text project__link_theme-dark'
                  : 'project__link project__link_text'
              }>
              GitHub
            </a>
          </ListItem>
        )}
      </List>
    </>
  );
}

export default Project;