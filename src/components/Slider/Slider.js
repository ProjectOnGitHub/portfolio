import { React, useState } from 'react';
import Button from '../Button/Button';
import Slide from '../Slide/Slide';
import './_Slider.scss';


function Slider(props) {
  let [translate, setTranstlate] = useState(0);
  let [count, setCount] = useState(0);

  function handleClickSliderButtonLeft() {
    const width = document.querySelector('.slider').offsetWidth;
    const slides = document.querySelectorAll('.slide');
    count <= 0 ? count = slides.length - 1 : --count;
    setCount(count);
    translate = count * width;
    setTranstlate(`${translate}`);
  }

  function handleClickSliderButtonRight() {
    const width = document.querySelector('.slider').offsetWidth;
    const slides = document.querySelectorAll('.slide');
    count >= slides.length - 1 ? count = 0 : ++count;
    setCount(count);
    translate = count * width;
    setTranstlate(`${translate}`);
  }

  return (
    <>
      <div className="slider">
        <ul className="slider__dots">
          <li className="slider__dot slider__dot_selected"></li>
          <li className="slider__dot"></li>
          <li className="slider__dot"></li>
          <li className="slider__dot"></li>
        </ul>
        <ul className="slider__list" style={{ transform: `translateX(${-translate}px)` }}>
          {
            props.projects.map((item) => (
              <Slide src={item.image} key={item.id}
                text={item.text} />))
          }
        </ul>
        <Button
          name="slider-button-left"
          className="slider__button slider__button_left"
          aria-label="Slide to left"
          type="button"
          isClick={handleClickSliderButtonLeft}
        >
          &larr;
        </Button>
        <Button
          name="slider-button-right"
          className="slider__button slider__button_right"
          aria-label="Slide to right"
          type="button"
          isClick={handleClickSliderButtonRight}
        >
          &rarr;
        </Button>
      </div>
    </>
  );
}

export default Slider;
