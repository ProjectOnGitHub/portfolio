function ExperienceItem({ className, title, name, start, text, end }) {
  return (
    <>
      <h3 className={`${className}__subtitle`}>{title}</h3>
      <span className={`${className}__name`}>{name}</span>
      <div className={`${className}__date`}>
        <span className={`${className}__date-start`}>{start}</span>
        {` — `}
        <span className={`${className}__date-end`}>{end}</span>
      </div>
      <div className={`${className}__text`}>
        {text.map((paragraph, i) => (
          <p
            key={i}
            className={`${className}__paragraph`}>
            {paragraph}
          </p>
        ))}
      </div>
    </>
  );
}

export default ExperienceItem;
