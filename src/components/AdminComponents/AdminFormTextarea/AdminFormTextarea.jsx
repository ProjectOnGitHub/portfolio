import './_AdminFormTextarea.scss';

function AdminFormTextarea({
  name,
  placeholder,
  required,
  value,
  onChange,
  label,
}) {
  return (
    <label className="admin-form__label">
      {label}
      <textarea
        className="admin-form__textarea"
        maxLength="400"
        minLength="40"
        name={name}
        placeholder={placeholder}
        required={required}
        rows="5"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export default AdminFormTextarea;
