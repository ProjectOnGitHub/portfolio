import './_Switcher.scss';

function Switcher({ modifier, isEnabled }) {
  return (
    <label className={`switcher switcher_${modifier}`}>
      <input
        checked={isEnabled}
        className={`switcher__input switcher__input_${modifier}`}
        type="checkbox"
      />
      <span className={`switcher__toggle switcher__toggle_${modifier}`}></span>
    </label>
  );
}

export default Switcher;
