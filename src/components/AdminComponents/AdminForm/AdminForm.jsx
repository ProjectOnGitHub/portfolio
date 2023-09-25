import './_AdminForm.scss';
import AdminSectionButtonDeleteItem from '../AdminSectionButtonsDeleteItem/AdminSectionButtonDeleteItem.jsx';

function AdminForm({ name, handleSubmit, children, modificator }) {
  const classes = modificator
    ? `admin-form admin-form_${modificator}`
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
