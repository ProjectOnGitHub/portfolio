function ExperienceItem({ className, name, position, start, text, end }) {
  return (
    <>
      <h3 className={`${className}__subtitle`}>{position}</h3>
      <span className={`${className}__name`}>{name}</span>
      <div className={`${className}__date`}>
        <span className={`${className}__date-start`}>{start}</span>
        {` — `}
        <span className={`${className}__date-end`}>{end}</span>
      </div>
      <div className={`${className}__text`}>
        {text.map((item) => (
          <p
            key={item.id}
            className={`${className}__paragraph`}>
            {item.paragraph}
          </p>
        ))}
      </div>
    </>
  );
}

export default ExperienceItem;
