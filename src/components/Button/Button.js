import React from 'react';

function Button(props) {
  return (
    <button
      type={props.type}
      aria-label={props.ariaLabel}
      className={props.className}
      name={props.name}
      onClick={props.isClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
