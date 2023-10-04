function ListItem({ className, children, modifier }) {
  const classes = modifier
    ? `${className} ${className}_${modifier}`
    : `${className}`;

  return <li className={classes}>{children}</li>;
}

export default ListItem;
