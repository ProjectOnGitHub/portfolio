import './_SliderDot.scss';
import Button from 'components/BaseComponents/Button/Button';

function SliderDot(props) {
  return (
    <li className="slider__dot">
      <Button
        aria-label="Switch slide"
        name="slider-dot-button"
        type="button"
        className={`${
          props.index === props.count
            ? 'slider__dot-button slider__dot-button_active'
            : 'slider__dot-button'
        }`}
        onClick={props.onClick}
      />
    </li>
  );
}

export default SliderDot;
