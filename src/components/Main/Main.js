import React from 'react';
import './_Main.scss';
import Profile from '../Profile/Profile';
import Section from '../Section/Section';
function Main() {
  return (
    <main className='main'>
      <Section
        name='profile'
        id="about">
        <Profile />
      </Section>
    </main>
  );
}

export default Main;
