import React from 'react';
import Button from '../Button/Button';
import Slide from '../Slide/Slide';
import './_Slider.scss';
import club27 from '../../images/27club.jpg';


function Slider() {

  return (
    <>
      <div className="slider">
        <ul className="slider__dots">
          <li className="slider__dot slider__dot_selected"></li>
          <li className="slider__dot"></li>
          <li className="slider__dot"></li>
          <li className="slider__dot"></li>
        </ul>
        <ul className="slider__list">
          <Slide
            key="1"
            src={club27}
            text="Текст слайда 1" />
          <Slide
            key="2"
            src={club27}
            text="Текст слайда 2" />
        </ul>
        <Button
          name="slider-button-left"
          className="slider__button slider__button_left"
          aria-label="Slide to left"
          type="button">
          &larr;
        </Button>
        <Button
          name="slider-button-right"
          className="slider__button slider__button_right"
          aria-label="Slide to right"
          type="button">
          &rarr;
        </Button>
      </div>
    </>
  );
}

export default Slider;
