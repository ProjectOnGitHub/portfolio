import { React } from 'react';
import './_AdminForm.scss';

function AdminForm({ name, handleSubmit, children }) {
  return (
    <form
      className='admin-form'
      name={name}
      onSubmit={handleSubmit}>
      {children}
    </form>
  );
}

export default AdminForm;
