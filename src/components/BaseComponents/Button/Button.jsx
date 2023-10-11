function Button({ ariaLabel, className, name, type, onClick, children }) {
  return (
    <button
      aria-label={ariaLabel}
      className={className}
      name={`button-${name}`}
      type={type}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
