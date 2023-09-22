import { React } from 'react';
import './_AdminForm.scss';

function AdminForm({ name, handleSubmit, children, modificator }) {
  const classes = modificator
    ? `admin-form admin-form_${modificator}`
    : `admin-form`;

  return (
    <form
      className={classes}
      name={name}
      onSubmit={handleSubmit}>
      {children}
    </form>
  );
}

export default AdminForm;
