import Profile from 'components/PublicComponents/Profile/Profile';
import Projects from 'components/PublicComponents/Projects/Projects';
import Contacts from 'components/PublicComponents/Contacts/Contacts';
import Skills from 'components/PublicComponents/Skills/Skills';
import Experience from 'components/PublicComponents/Experience/Experience';

function MainStart({
  contacts,
  experience,
  profile,
  projects,
  skillsByType,
  skillsText,
}) {
  return (
    <>
      <Profile
        description={profile.description}
        name={profile.name}
        position={profile.position}
      />
      <Projects
        projects={projects}
        title="Проекты"
      />
      <Skills
        skillsByType={skillsByType}
        skillsText={skillsText}
        title="Навыки"
      />
      <Experience
        experience={experience}
        title="Опыт работы"
      />
      <Contacts
        contacts={contacts}
        title="Контакты"
      />
    </>
  );
}

export default MainStart;
