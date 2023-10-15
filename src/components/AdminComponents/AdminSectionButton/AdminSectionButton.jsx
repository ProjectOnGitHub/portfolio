import Button from 'components/BaseComponents/Button/Button';

function AdminSectionButton({
  onClick,
  children,
  modifier,
  ariaLabel,
  name,
  type,
}) {
  return (
    <Button
      ariaLabel={ariaLabel}
      className={`admin-section__button admin-section__button_${modifier}`}
      name={name}
      type={type}
      onClick={onClick}>
      {children}
    </Button>
  );
}

export default AdminSectionButton;
