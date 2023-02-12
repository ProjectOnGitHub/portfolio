import React from 'react';

function Button(props) {
  return (
    <button
      type={props.type}
      aria-label={props.ariaLabel}
      className={`${props.name}`}>
      {props.children}
    </button>
  );
}

export default Button;