function List({ className, children, modificator }) {
  const classes = modificator
    ? `${className}__list ${className}__list_${modificator}`
    : `${className}__list`;

  return <ul className={classes}>{children}</ul>;
}

export default List;
