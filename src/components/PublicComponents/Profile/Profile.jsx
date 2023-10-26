import { HashLink as Link } from 'react-router-hash-link';
import './_Profile.scss';
import Icon from 'components/BaseComponents/Icon/Icon';
import useParsedHTML from 'hooks/useParsedHTML';

function Profile({ name, position, description }) {
  const parsedHTML = useParsedHTML(description, 'profile-text');

  return (
    <>
      <div className="profile__info">
        <h1 className="profile__title">{name}</h1>
        <h2 className="profile__subtitle">{position}</h2>
      </div>
      <div className="profile-text">{parsedHTML}</div>
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
