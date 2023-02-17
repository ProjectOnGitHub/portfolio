import React from 'react';
import Icon from '../Icon/Icon';
import { HashLink as Link } from 'react-router-hash-link';
import './_Profile.scss';

function Profile() {
  return (
    <>

      <div className="profile__info">
        <h1 className='profile__title'>Александр</h1>
        <h2 className='profile__subtitle'>начинающий веб-разработчик</h2>
      </div>
      <article className='profile__text'>
        <p className='profile__paragraph'>
          Хочу развивать свои навыки, создавать интересные и полезные
          приложения. Стремлюсь менять свою жизнь и жизнь окружающих меня
          людей к лучшему.
        </p>
      </article>
      <Link to="#portfolio" className="profile__link">
        <Icon name="arrow-down" />
      </Link>

    </>
  );
}

export default Profile;
