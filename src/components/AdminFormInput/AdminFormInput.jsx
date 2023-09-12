import { React } from 'react';
import './_AdminFormInput.scss';

function AdminFormInput({
  className,
  maxLength,
  minLength,
  name,
  placeholder,
  required,
  type,
}) {
  return (
    <input
      className={className}
      maxLength={maxLength}
      minLength={minLength}
      name={name}
      placeholder={placeholder}
      required={required}
      type={type}
    />
  );
}

export default AdminFormInput;
