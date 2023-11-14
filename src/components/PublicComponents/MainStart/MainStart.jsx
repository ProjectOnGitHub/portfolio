import Profile from 'components/PublicComponents/Profile/Profile';
import Projects from 'components/PublicComponents/Projects/Projects';
import Contacts from 'components/PublicComponents/Contacts/Contacts';
import Skills from 'components/PublicComponents/Skills/Skills';
import Experience from 'components/PublicComponents/Experience/Experience';

function MainStart({ pages }) {
  const components = {
    profile: Profile,
    projects: Projects,
    skills: Skills,
    experience: Experience,
    contacts: Contacts,
  };

  return (
    <>
      {pages.map((page) => {
        if (page.isEnabled) {
          const Component = components[page.url];
          return <Component key={page.url} />;
        }
        return null;
      })}
    </>
  );
}

export default MainStart;
