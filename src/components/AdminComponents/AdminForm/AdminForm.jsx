import './_AdminForm.scss';
import AdminSectionButtonDeleteItem from '../AdminSectionButtonsDeleteItem/AdminSectionButtonDeleteItem.jsx';

function AdminForm({ name, handleSubmit, children, modifier }) {
  const classes = modifier
    ? `admin-form admin-form_${modifier}`
    : `admin-form`;

  return (
    <>
      <form
        className={classes}
        name={name}
        onSubmit={handleSubmit}>
        {children}
      </form>
      <AdminSectionButtonDeleteItem>Удалить</AdminSectionButtonDeleteItem>
    </>
  );
}

export default AdminForm;
