import { React } from 'react';
import './_AdminFormTextarea.scss';

function AdminFormTextarea(props) {
  return (
    <textarea
      className={props.className}
      maxLength={props.maxLength}
      minLength={props.minLength}
      name={props.name}
      placeholder={props.placeholder}
      required={props.required}
      rows={props.rows}
    />
  );
}

export default AdminFormTextarea;
