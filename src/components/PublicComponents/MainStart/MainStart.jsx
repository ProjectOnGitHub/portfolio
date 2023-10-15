import { Fragment } from 'react';
import Section from '../Section/Section';
import Profile from '../Profile/Profile';
import Projects from '../Projects/Projects';
import Contacts from '../Contacts/Contacts';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';

function MainStart({
  contacts,
  experience,
  pages,
  profile,
  projects,
  skillsByType,
  skillsText,
}) {
  return (
    <>
      {pages.map((page) => (
        <Fragment key={page.id}>
          {page.isEnabled && (
            <Section
              key={page.id}
              className={page.url}
              id={page.url}>
              {page.url === 'profile' && (
                <Profile
                  description={profile.description}
                  name={profile.name}
                  position={profile.position}
                />
              )}
              {page.url === 'projects' && (
                <Projects
                  projects={projects}
                  title="Проекты"
                />
              )}
              {page.url === 'skills' && (
                <Skills
                  skillsByType={skillsByType}
                  skillsText={skillsText}
                  title="Навыки"
                />
              )}
              {page.url === 'experience' && (
                <Experience
                  experience={experience}
                  title="Опыт работы"
                />
              )}
              {page.url === 'contacts' && (
                <Contacts
                  contacts={contacts}
                  title="Контакты"
                />
              )}
            </Section>
          )}
        </Fragment>
      ))}
    </>
  );
}

export default MainStart;
