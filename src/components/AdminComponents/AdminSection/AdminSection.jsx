import Section from 'components/PublicComponents/Section/Section';
import AdminPopupDeleteItem from 'components/AdminComponents/AdminPopupDeleteItem/AdminPopupDeleteItem';
import AdminPopupSaveData from 'components/AdminComponents/AdminPopupSaveData/AdminPopupSaveData';
import './_AdminSection.scss';

function AdminSection({
  className,
  id,
  title,
  modifier,
  children,
  currentPopup,
  confirmAction,
}) {
  const sectionContainerClass = modifier
    ? `admin-section__container admin-section__container_${modifier}`
    : `admin-section__container`;

  return (
    <>
      <Section
        className={`admin-section admin-${className}`}
        id={`admin-${id}`}>
        <h1 className="admin-section__title">{title}</h1>
        <div className={sectionContainerClass}>{children}</div>
      </Section>
      {currentPopup === 'delete' && (
        <AdminPopupDeleteItem confirmAction={confirmAction} />
      )}
      {currentPopup === 'save' && (
        <AdminPopupSaveData confirmAction={confirmAction} />
      )}
    </>
  );
}

export default AdminSection;
