import './_AdminForm.scss';

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
    </>
  );
}

export default AdminForm;
