import React from 'react';
import './_Slide.scss';

function Slide(props) {
  return (
    <li className="slide">
      <figure className="slide__figure">
        <img
          src={props.src}
          alt={props.alt}
          className="slide__image"
        />
        <figcaption className="slide__text">{props.text}</figcaption>
      </figure>
    </li>
  );
}

export default Slide;
