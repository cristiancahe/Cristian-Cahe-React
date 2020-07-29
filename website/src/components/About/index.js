import React from 'react';
import Fade from 'react-reveal/Fade';


export default function About() {
  return (
    <div className="about">
      <Fade bottom>
        <h1>Hello,</h1>
      </Fade>
      <Fade>
        <h2>I'm Cristian and I create <span>beautiful</span> things on the internet.</h2>
        {/* <h2>I'm a software engineer at <a href="https://www.globant.com/" target="_blank">Globant</a>, and computer science student at <a href="http://www.uba.ar/" target="_blank">UBA</a>.</h2>
        <h2>Check out my work &darr;</h2> */}
      </Fade>
    </div>
  );
}