import { React } from 'react';
import './_AdminForm.scss';

function AdminForm({ name, handleSubmit, children, modificator }) {
  return (
    <form
      name={name}
      className={
        modificator ? `admin-form admin-form_${modificator}` : `admin-form`
      }
      onSubmit={handleSubmit}>
      {children}
    </form>
  );
}

export default AdminForm;
