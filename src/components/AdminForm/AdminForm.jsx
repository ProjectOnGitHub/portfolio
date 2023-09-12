import { React } from 'react';
import './_AdminForm.scss';

function AdminForm(props) {
  return (
    <form
      className='admin-form'
      name={props.name}
      onSubmit={props.handleSubmit}>
      {props.children}
    </form>
  );
}

export default AdminForm;
