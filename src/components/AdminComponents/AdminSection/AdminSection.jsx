import Section from 'components/PublicComponents/Section/Section';

import './_AdminSection.scss';

function AdminSection({ className, id, title, modifier, children }) {
  const sectionContainerClass = modifier
    ? `admin-section__container admin-section__container_${modifier}`
    : `admin-section__container`;

  return (
    <Section
      className={`admin-section admin-${className}`}
      id={`admin-${id}`}>
      <h1 className="admin-section__title">{title}</h1>
      <div className={sectionContainerClass}>{children}</div>
    </Section>
  );
}

export default AdminSection;
