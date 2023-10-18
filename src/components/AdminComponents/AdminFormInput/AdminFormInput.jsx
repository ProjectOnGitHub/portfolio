import './_AdminFormInput.scss';

function AdminFormInput({
  placeholder,
  required,
  type,
  name,
  value,
  onChange,
  label,
}) {
  return (
    <label className="admin-form__label">
      {label}
      <input
        className="admin-form__input"
        maxLength="250"
        minLength="2"
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export default AdminFormInput;
