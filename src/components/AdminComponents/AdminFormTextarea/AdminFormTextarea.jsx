import './_AdminFormTextarea.scss';

function AdminFormTextarea({ name, placeholder, required, value }) {
  return (
    <textarea
      className="admin-form__textarea"
      maxLength="400"
      minLength="40"
      name={`textarea-${name}`}
      placeholder={placeholder}
      required={required}
      rows="5"
      value={value}
    />
  );
}

export default AdminFormTextarea;
