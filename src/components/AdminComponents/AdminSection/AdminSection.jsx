import './_AdminSection.scss';
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
      className={`section admin-section admin-section__${className}`}
      id={`admin-${id}`}>
      <h1 className="admin-section__title">{title}</h1>
      <div className={sectionContainerClass}>{children}</div>
      <ul className="admin-section__buttons">
        <li className="admin-section__buttons-item">
          <Button
            aria-label="Reset button"
            className="admin-section__button admin-section__button_reset"
            name="button-reset"
            type="submit"
            onClick={onClick}>
            Сбросить изменения
          </Button>
        </li>
        <li className="admin-section__buttons-item">
          <Button
            aria-label="Save button"
            className="admin-section__button admin-section__button_save"
            name="button-save"
            type="submit"
            onClick={onClick}>
            Сохранить изменения
          </Button>
        </li>
      </ul>
    </section>
  );
}

export default AdminSection;
