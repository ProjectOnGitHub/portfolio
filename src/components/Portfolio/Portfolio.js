import React from 'react';
import './_Portfolio.scss';
import club27 from '../../images/27club.jpg';

function Portfolio() {
  return (
    <>
      <h2 className="portfolio__title">Portfolio</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <figure className="portfolio__figure">
            <img src={club27} alt="27 Club"
              className="portfolio__image" />
            <figcaption className="portolio__text">
              27 Club
            </figcaption>
          </figure>
        </li>
        <li className="portfolio__list-item">
          <figure className="portfolio__figure">
            <img src={club27} alt="27 Club"
              className="portfolio__image" />
            <figcaption className="portolio__text">
              27 Club
            </figcaption>
          </figure>
        </li>
        <li className="portfolio__list-item">
          <figure className="portfolio__figure">
            <img src={club27} alt="27 Club"
              className="portfolio__image" />
            <figcaption className="portolio__text">
              27 Club
            </figcaption>
          </figure>
        </li>
        <li className="portfolio__list-item">
          <figure className="portfolio__figure">
            <img src={club27} alt="27 Club"
              className="portfolio__image" />
            <figcaption className="portolio__text">
              27 Club
            </figcaption>
          </figure>
        </li>
        <li className="portfolio__list-item">
          <figure className="portfolio__figure">
            <img src={club27} alt="27 Club"
              className="portfolio__image" />
            <figcaption className="portolio__text">
              27 Club
            </figcaption>
          </figure>
        </li>
      </ul>
    </>
  );
}

export default Portfolio;
