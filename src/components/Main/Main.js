import React from 'react';
import './_Main.scss';
import Section from '../Section/Section';
import Profile from '../Profile/Profile';
import Portfolio from '../Portfolio/Portfolio';
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
        className="portfolio"
        id="portfolio">
        <Portfolio
          title="Portfolio"
        />
      </Section>
    </main>
  );
}

export default Main;
