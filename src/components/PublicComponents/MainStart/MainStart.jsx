import { Fragment } from 'react';
import Section from 'components/PublicComponents/Section/Section';
import Profile from 'components/PublicComponents/Profile/Profile';
import Projects from 'components/PublicComponents/Projects/Projects';
import Contacts from 'components/PublicComponents/Contacts/Contacts';
import Skills from 'components/PublicComponents/Skills/Skills';
import Experience from 'components/PublicComponents/Experience/Experience';

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
