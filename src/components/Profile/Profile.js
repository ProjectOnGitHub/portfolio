import React from 'react';
import './_Profile.scss';
import myPhoto from '../../images/my-photo.jpeg';

function Profile() {
  return (
    <>
      <h1 className='profile__title'>Александр</h1>
      <h2 className='profile__subtitle'>начинающий веб-разработчик</h2>
      <article className='profile__text'>
        <p className='profile__paragraph'>
          Хочу развивать свои навыки, создавать интересные и полезные
          приложения. Стремлюсь менять свою жизнь и жизнь окружающих меня
          людей к лучшему.
        </p>
      </article>
      <figure className="profile__figure">
        <img
          src={myPhoto}
          alt='My Photo'
          className='profile__photo' />
      </figure>
    </>
  );
}

export default Profile;
