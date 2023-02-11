import React from 'react';
import './_Main.scss';
import Section from '../Section/Section';
import Profile from '../Profile/Profile';
import Portfolio from '../Portfolio/Portfolio';
function Main() {
  return (
    <main className='main'>
      <Section
        name='profile'
        id="about">
        <Profile />
      </Section>
      <Section name="portfolio" id="portfolio"><Portfolio /></Section>
    </main>
  );
}

export default Main;
