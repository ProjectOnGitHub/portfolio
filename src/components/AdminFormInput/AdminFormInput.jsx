import { React } from 'react';
import './_AdminFormInput.scss';

function AdminFormInput(props) {
  return (
    <input
      className={props.className}
      maxLength={props.maxLength}
      minLength={props.minLength}
      name={props.name}
      placeholder={props.placeholder}
      type={props.type}
    />
  );
}

export default AdminFormInput;
