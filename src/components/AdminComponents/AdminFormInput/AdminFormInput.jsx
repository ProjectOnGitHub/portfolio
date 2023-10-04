import './_AdminFormInput.scss';

function AdminFormInput({ placeholder, required, type, name, value }) {
  return (
    <label className="admin-form__label">
      {placeholder}
      <input
        className="admin-form__input"
        maxLength="250"
        minLength="2"
        name={`input-${type}-${name}`}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
      />
    </label>
  );
}

export default AdminFormInput;
