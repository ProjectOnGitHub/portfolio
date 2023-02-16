import React from 'react';
import Button from '../Button/Button';
import './_SliderDot.scss';



function SliderDot(props) {
  return (
    <li
      className="slider__dot">
      <Button
        name="slider-dot-button"
        className={`${props.index === props.count ? "slider__dot-button slider__dot-button_active" : "slider__dot-button"}`}
        aria-label="Switch slide"
        type="button"
        isClick={props.isClick}
      />
    </li>
  );
}

export default SliderDot;
