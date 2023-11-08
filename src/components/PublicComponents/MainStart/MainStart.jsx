import Profile from 'components/PublicComponents/Profile/Profile';
import Projects from 'components/PublicComponents/Projects/Projects';
import Contacts from 'components/PublicComponents/Contacts/Contacts';
import Skills from 'components/PublicComponents/Skills/Skills';
import Experience from 'components/PublicComponents/Experience/Experience';

function MainStart({ experience, skillsByType, skillsText }) {
  return (
    <>
      <Profile />
      <Projects />
      <Skills
        skillsByType={skillsByType}
        skillsText={skillsText}
      />
      <Experience experience={experience} />
      <Contacts />
    </>
  );
}

export default MainStart;
