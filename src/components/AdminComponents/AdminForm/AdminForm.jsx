import './_AdminForm.scss';
import AdminSectionButtonDeleteItem from '../AdminSectionButtonsDeleteItem/AdminSectionButtonDeleteItem.jsx';

function AdminForm({ name, children, modifier }) {
  const classes = modifier ? `admin-form admin-form_${modifier}` : `admin-form`;

  return (
    <>
      <form
        className={classes}
        name={name}
        onSubmit={(e) => e.preventDefault()}>
        {children}
      </form>
      <AdminSectionButtonDeleteItem>Удалить</AdminSectionButtonDeleteItem>
    </>
  );
}

export default AdminForm;
