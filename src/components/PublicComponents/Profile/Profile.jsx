import { HashLink as Link } from 'react-router-hash-link';
import './_Profile.scss';
import Icon from '../../BaseComponents/Icon/Icon';

function Profile({ name, position, description }) {
  return (
    <>
      <div className="profile__info">
        <h1 className="profile__title">{name}</h1>
        <h2 className="profile__subtitle">{position}</h2>
      </div>
      <div className="profile__text">
        <p className="profile__paragraph">{description}</p>
      </div>
      <Link
        aria-label="Go to next screen"
        className="profile__link"
        to="#projects">
        <Icon
          className="profile"
          name="arrow-down"
        />
      </Link>
    </>
  );
}

export default Profile;
