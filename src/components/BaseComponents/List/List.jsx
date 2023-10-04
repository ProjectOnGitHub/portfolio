function List({ className, children, modifier }) {
  const classes = modifier
    ? `${className} ${className}_${modifier}`
    : `${className}`;

  return <ul className={classes}>{children}</ul>;
}

export default List;
