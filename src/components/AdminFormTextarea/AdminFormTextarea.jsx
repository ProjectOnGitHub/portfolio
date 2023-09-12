import { React } from 'react';
import './_AdminFormTextarea.scss';

function AdminFormTextarea({
  className,
  maxLength,
  minLength,
  name,
  placeholder,
  required,
  rows,
}) {
  return (
    <textarea
      className={className}
      maxLength={maxLength}
      minLength={minLength}
      name={name}
      placeholder={placeholder}
      required={required}
      rows={rows}
    />
  );
}

export default AdminFormTextarea;
