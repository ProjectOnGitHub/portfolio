import { HashLink as Link } from 'react-router-hash-link';
import Icon from 'components/BaseComponents/Icon/Icon';
import useParsedHTML from 'hooks/useParsedHTML';
import Section from 'components/PublicComponents/Section/Section';
import useItemInfo from 'hooks/useItemInfo';

import './_Profile.scss';

function Profile() {
  const profile = useItemInfo('profile');
  const parsedHTML = useParsedHTML(profile.description, 'profile-text');

  return (
    <Section
      className="profile"
      id="profile">
      <div className="profile__info">
        <h1 className="profile__title">{profile.name}</h1>
        <h2 className="profile__subtitle">{profile.position}</h2>
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
    </Section>
  );
}

export default Profile;
