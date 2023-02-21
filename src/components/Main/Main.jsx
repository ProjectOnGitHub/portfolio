import React from 'react';
import './_Main.scss';
import Section from '../Section/Section.jsx';
import Profile from '../Profile/Profile.jsx';
import Projects from '../Projects/Projects.jsx';
import Contacts from '../Contacts/Contacts.jsx';
import Skills from '../Skills/Skills.jsx';

function Main() {
  return (
    <main className="main">
      <Section
        className="profile"
        id="about"
      >
        <Profile title="Александр" />
      </Section>
      <Section
        className="projects"
        id="projects"
      >
        <Projects title="Projects" />
      </Section>
      <Section
        className="skills"
        id="skills"
      >
        <Skills title="Skills" />
      </Section>
      <Section
        className="contacts"
        id="contacts"
      >
        <Contacts title="Contacts" />
      </Section>
    </main>
  );
}

export default Main;
