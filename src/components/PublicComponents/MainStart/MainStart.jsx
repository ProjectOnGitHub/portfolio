import Section from '../Section/Section.jsx';
import Profile from '../Profile/Profile.jsx';
import Projects from '../Projects/Projects.jsx';
import Contacts from '../Contacts/Contacts.jsx';
import Skills from '../Skills/Skills.jsx';
import Experience from '../Experience/Experience.jsx';

function MainStart({ projects, skillsByType }) {
  return (
    <>
      <Section
        className="profile"
        id="profile">
        <Profile title="Александр" />
      </Section>
      <Section
        className="projects"
        id="projects">
        <Projects
          projects={projects}
          title="Проекты"
        />
      </Section>
      <Section
        className="skills"
        id="skills"
        title="Навыки">
        <Skills
          skillsByType={skillsByType}
          title="Навыки"
        />
      </Section>
      <Section
        className="experience"
        id="experience">
        <Experience title="Опыт работы" />
      </Section>
      <Section
        className="contacts"
        id="contacts">
        <Contacts title="Контакты" />
      </Section>
    </>
  );
}

export default MainStart;
