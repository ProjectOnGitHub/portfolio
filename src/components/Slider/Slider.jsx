import { React, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import SliderDot from '../SliderDot/SliderDot';
import './_Slider.scss';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import Slide from '../Slide/Slide';

function Slider(props) {
  let [count, setCount] = useState(0);
  const handlers = useSwipeable({
    onSwipedLeft: () => updateCount(count + 1),
    onSwipedRight: () => updateCount(count - 1),
  });

  function updateCount(newCount) {
    if (newCount < 0) {
      newCount = props.projects.length - 1;
    }
    if (newCount >= props.projects.length) {
      newCount = 0;
    }
    setCount(newCount);
  }

  return (
    <>
      <div
        {...handlers}
        className="slider"
      >
        <ul className="slider__dots">
          {props.projects.map((item, i) => (
            <SliderDot
              key={item.id}
              count={count}
              index={i}
              isClick={() => {
                updateCount(i);
              }}
            />
          ))}
        </ul>
        <ul
          className="slider__list"
          style={{ transform: `translateX(${-count * 100}%)` }}
        >
          {props.projects.map((item) => (
            <Slide
              key={item.id}
              src={item.image}
              text={item.text}
            />
          ))}
        </ul>
        <Button
          aria-label="Slide to left"
          className="slider__button slider__button_left"
          name="slider-button-left"
          type="button"
          isClick={() => {
            updateCount(count - 1);
          }}
        >
          <Icon name="arrow-left" />
        </Button>
        <Button
          aria-label="Slide to right"
          className="slider__button slider__button_right"
          name="slider-button-right"
          type="button"
          isClick={() => {
            updateCount(count + 1);
          }}
        >
          <Icon name="arrow-right" />
        </Button>
      </div>
    </>
  );
}

export default Slider;
