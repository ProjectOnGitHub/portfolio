import React from 'react';
import './_SliderDot.scss';
import Button from '../Button/Button';

function SliderDot(props) {
  return (
    <li className="slider__dot">
      <Button
        aria-label="Switch slide"
        isClick={props.isClick}
        name="slider-dot-button"
        type="button"
        className={`${
          props.index === props.count
            ? 'slider__dot-button slider__dot-button_active'
            : 'slider__dot-button'
        }`}
      />
    </li>
  );
}

export default SliderDot;
