import React from 'react';

function Button(props) {
  return (
    <button
      aria-label={props.ariaLabel}
      className={props.className}
      name={props.name}
      type={props.type}
      onClick={props.isClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
