import React from 'react';
import './_Main.scss';

function Main(props) {
  return <main className='main'>{props.children}</main>;
}

export default Main;
