import React from 'react';
import Fade from 'react-reveal/Fade';


export default function About() {
  return (
    <div className="about">
      <Fade bottom cascade>
        <h1>Hello,</h1>
      </Fade>
      <Fade>
        <h2>I'm a software engineer at <a href="https://www.globant.com/">Globant</a>, and computer science student at <a href="http://www.uba.ar/">UBA</a>.</h2>
        <h2>Check out my work &darr;</h2>
      </Fade>
    </div>
  );
}