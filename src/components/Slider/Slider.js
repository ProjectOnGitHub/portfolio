import { React, useState } from 'react';
import Button from '../Button/Button';
import Slide from '../Slide/Slide';
import SliderDot from '../SliderDot/SliderDot';


import './_Slider.scss';



function Slider(props) {
  let [translate, setTranstlate] = useState(0);
  let [count, setCount] = useState(0);


  function clickDot(id) {
    console.log(id);
  }

  function calcCount(e) {
    if (e.target.classList.contains('slider__button_left')) {
      count <= 0
        ? count = props.projects.length - 1
        : --count;
    }
    if (e.target.classList.contains('slider__button_right')) {
      count >= props.projects.length - 1
        ? count = 0
        : ++count;
    }
    setCount(count);
  }

  function moveSlide(e) {
    calcCount(e);
    translate = count * 100;
    setTranstlate(`${translate}`);
  }


  return (
    <>
      <div className="slider">
        <ul className="slider__dots">
          {
            props.projects.map((item, i) => (
              <SliderDot
                key={item.id}
                count={count}
                index={i}
                isClick={clickDot}
              />))
          }
        </ul>
        <ul className="slider__list" style={{ transform: `translateX(${-translate}%)` }}>
          {
            props.projects.map((item) => (
              <Slide
                src={item.image}
                key={item.id}
                text={item.text} />))
          }
        </ul>
        <Button
          name="slider-button-left"
          className="slider__button slider__button_left"
          aria-label="Slide to left"
          type="button"
          isClick={moveSlide}
        >
          &larr;
        </Button>
        <Button
          name="slider-button-right"
          className="slider__button slider__button_right"
          aria-label="Slide to right"
          type="button"
          isClick={moveSlide}
        >
          &rarr;
        </Button>
      </div>
    </>
  );
}

export default Slider;
