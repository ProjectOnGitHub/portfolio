import { React, useContext } from 'react';
import './_Main.scss';
import Section from '../Section/Section.jsx';
import Profile from '../Profile/Profile.jsx';
import Projects from '../Projects/Projects.jsx';
import Contacts from '../Contacts/Contacts.jsx';
import Skills from '../Skills/Skills.jsx';
import DarkThemeContext from '../../contexts/DarkThemeContext.jsx';

function Main() {
  const { isDarkTheme } = useContext(DarkThemeContext);
  return (
    <main className={isDarkTheme ? 'main main_theme-dark' : 'main'}>
      <Section
        className='profile'
        id='about'>
        <Profile title='Александр' />
      </Section>
      <Section
        className='projects'
        id='projects'>
        <Projects title='Проекты' />
      </Section>
      <Section
        className='skills'
        id='skills'>
        <Skills title='Навыки' />
      </Section>
      <Section
        className='contacts'
        id='contacts'>
        <Contacts title='Контакты' />
      </Section>
    </main>
  );
}

export default Main;
