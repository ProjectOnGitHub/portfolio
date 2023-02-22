import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './_Profile.scss';
import Icon from '../Icon/Icon.jsx';

function Profile(props) {
  return (
    <>
      <div className="profile__info">
        <h1 className="profile__title">{props.title}</h1>
        <h2 className="profile__subtitle">начинающий веб-разработчик</h2>
      </div>
      <div className="profile__text">
        <p className="profile__paragraph">
          Хочу развивать свои навыки, создавать интересные и полезные
          приложения. Стремлюсь менять свою жизнь и жизнь окружающих меня людей
          к лучшему.
        </p>
      </div>
      <Link
        aria-label="Go to next screen"
        className="profile__link"
        to="#projects"
      >
        <Icon
          className="profile"
          name="arrow-down"
        />
      </Link>
    </>
  );
}

export default Profile;
