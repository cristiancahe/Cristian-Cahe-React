import React from 'react';
import Fade from 'react-reveal/Fade';


export default function About() {
  return (
    <div className="about">
      <Fade bottom>
        <h1>Hello,</h1>
      </Fade>
      <Fade bottom>
        <h2>I'm Cristian and I create things for the internet.</h2>
      </Fade>
      <Fade bottom big>
        <div className="cardContainer">
          <div className="card">
            <h3>Work</h3>
            <p>Software Engineer @ Globant</p>
          </div>
          <div className="card">
            <h3>Education</h3>
            <p>Computer Science @ University of Buenos Aires</p>
          </div>
        </div>
      </Fade>
    </div>
  );
}