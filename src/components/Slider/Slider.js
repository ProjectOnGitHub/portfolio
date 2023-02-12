import React from 'react';
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
          <li className="slider__list-item">
            <figure className="slider__figure">
              <img
                src={club27}
                alt="27 Club"
                className="slider__image"
              />
              <figcaption className="slider__text">
                Фильм «Почти знаменит»: в тихом омуте черти водятся
              </figcaption>
            </figure>
          </li>
          <li className="slider__list-item">
            <figure className="slider__figure">
              <img
                src={club27}
                alt="27 Club"
                className="slider__image"
              />
              <figcaption className="slider__text">
                Фильм «Почти знаменит»: в тихом омуте черти водятся
              </figcaption>
            </figure>
          </li>
        </ul>
        <button className="slider__button slider__button_left">&larr;</button>
        <button className="slider__button slider__button_right">&rarr;</button>
      </div>
    </>
  );
}

export default Slider;
