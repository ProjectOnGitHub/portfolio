import React from 'react';
import './_Main.scss';
import Section from '../Section/Section';
import Profile from '../Profile/Profile';
import Projects from '../Projects/Projects';
import Contacts from '../Contacts/Contacts';
import Skills from '../Skills/Skills';

function Main() {
  return (
    <main className='main'>
      <Section
        className='profile'
        id="about">
        <Profile
          title="Александр"
        />
      </Section>
      <Section
        className="projects"
        id="projects">
        <Projects
          title="Projects"
        />
      </Section>
      <Section
        className="skills"
        id="skills">
        <Skills
          title="Skills"
        />
      </Section>
      <Section
        className="contacts"
        id="contacts">
        <Contacts
          title="Contacts"
        />
      </Section>
    </main>
  );
}

export default Main;
