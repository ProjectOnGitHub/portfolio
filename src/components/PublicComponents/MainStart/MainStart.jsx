import Profile from 'components/PublicComponents/Profile/Profile';
import Projects from 'components/PublicComponents/Projects/Projects';
import Contacts from 'components/PublicComponents/Contacts/Contacts';
import Skills from 'components/PublicComponents/Skills/Skills';
import Experience from 'components/PublicComponents/Experience/Experience';

function MainStart() {
  return (
    <>
      <Profile />
      <Projects />
      <Skills />
      <Experience />
      <Contacts />
    </>
  );
}

export default MainStart;
