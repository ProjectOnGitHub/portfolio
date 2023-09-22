import './_AdminFormInput.scss';

function AdminFormInput({ placeholder, required, type, name }) {
  return (
    <input
      className='admin-form__input'
      maxLength='250'
      minLength='2'
      name={`input-${type}-${name}`}
      placeholder={placeholder}
      required={required}
      type={type}
    />
  );
}

export default AdminFormInput;
