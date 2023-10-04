import './_Nav.scss';

function Nav({className, children}) {
  return (
    <nav className={`${className}__navigation`}>{children}</nav>
  );
}

export default Nav;
