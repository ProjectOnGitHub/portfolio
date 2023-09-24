function List({ className, children, modificator }) {
  const classes = modificator
    ? `${className} ${className}_${modificator}`
    : `${className}`;

  return <ul className={classes}>{children}</ul>;
}

export default List;
