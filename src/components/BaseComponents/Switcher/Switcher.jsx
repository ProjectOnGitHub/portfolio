import './_Switcher.scss';

function Switcher({ modifier, isEnabled, toggleVisibility, item }) {
  function handleCheckboxChange() {
    toggleVisibility(item);
  }
  return (
    <label className={`switcher switcher_${modifier}`}>
      <input
        checked={isEnabled}
        className={`switcher__input switcher__input_${modifier}`}
        type="checkbox"
        onChange={handleCheckboxChange}
      />
      <span className={`switcher__toggle switcher__toggle_${modifier}`}></span>
    </label>
  );
}

export default Switcher;
