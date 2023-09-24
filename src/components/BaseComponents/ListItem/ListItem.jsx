function ListItem({ className, children, modificator }) {
  const classes = modificator
    ? `${className} ${className}_${modificator}`
    : `${className}`;

  return <li className={classes}>{children}</li>;
}

export default ListItem;
