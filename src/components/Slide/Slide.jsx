import React from 'react';
import './_Slide.scss';

function Slide(props) {
  return (
    <li className="slide">
      <figure className="slide__figure">
        <img
          alt={props.alt}
          className="slide__image"
          src={props.src}
        />
        <figcaption className="slide__text">{props.text}</figcaption>
      </figure>
    </li>
  );
}

export default Slide;
