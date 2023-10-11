import './_Popup.scss';

function Popup({ popupIsOpen, children }) {
  return (
    <section className={`popup ${popupIsOpen && 'popup_opened'}`}>
      <div className="popup__container">{children}</div>
    </section>
  );
}

export default Popup;
