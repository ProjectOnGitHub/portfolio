import React from 'react';
import './_AdminProfile.scss';

function AdminProfile(props) {
  return (
    <>
      <h1 className='admin-profile__title'>{props.title}</h1>
      <div className='admin-profile__container'>
        <div className='admin-profile__info'>
          <p className='admin-profile__name'>Александр</p>
          <p className='admin-profile__position'>HTML-верстальщик</p>
        </div>
        <div className='admin-profile__text'>
          <p className='profile__paragraph'>Ушёл из SEO в разработку</p>
        </div>
      </div>
    </>
  );
}

export default AdminProfile;
