import './_AdminSection.scss';
import List from '../../BaseComponents/List/List.jsx';
import ListItem from '../../BaseComponents/ListItem/ListItem.jsx';
import Button from '../../BaseComponents/Button/Button.jsx';

function AdminSection({
  className,
  id,
  title,
  modificator,
  children,
  onClick,
}) {
  const sectionContainerClass = modificator
    ? `admin-section__container admin-section__container_${modificator}`
    : `admin-section__container`;

  return (
    <section
      className={`section admin-section admin-${className}`}
      id={`admin-${id}`}>
      <h1 className="admin-section__title">{title}</h1>
      <div className={sectionContainerClass}>{children}</div>
      <List className="admin-section__buttons">
        <ListItem className="admin-section__buttons-item">
          <Button
            aria-label="Reset button"
            className="admin-section__button admin-section__button_reset"
            name="button-reset"
            type="submit"
            onClick={onClick}>
            Сбросить изменения
          </Button>
        </ListItem>
        <ListItem className="admin-section__buttons-item">
          <Button
            aria-label="Save button"
            className="admin-section__button admin-section__button_save"
            name="button-save"
            type="submit"
            onClick={onClick}>
            Сохранить изменения
          </Button>
        </ListItem>
      </List>
    </section>
  );
}

export default AdminSection;
