import './_AdminSection.scss';
import AdminSectionButtonsGlobal from '../AdminSectionButtonsGlobal/AdminSectionButtonsGlobal.jsx';

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
      <AdminSectionButtonsGlobal onClick={onClick} />
    </section>
  );
}

export default AdminSection;
