import React from 'react';
import './_Main.scss';
import Section from '../Section/Section';
import Profile from '../Profile/Profile';
import Projects from '../Projects/Projects';
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
          title="skills"
        />
      </Section>
    </main>
  );
}

export default Main;
