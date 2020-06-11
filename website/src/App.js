import React from 'react';
import Navbar from './components/navbar';
import Blog from './components/blog';
import Projects from './components/projects';
import Contact from './components/contact';
import './styles/main.css';

export default function App() {
  return (
    <body>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <div className="hero">
        <h1>Hello,</h1>
        <h2>This website is under reconstruction <span role="img">🚧</span>.</h2>
        <h2>Please come back soon!</h2>
        {/* <h2>I'm a software engineer from the City of Buenos Aires</h2> */}
        {/* <h2>I'm currently working for Globant, whilst also pursuing a Bachelor in Computer Science.</h2> */}
      </div>
      <React.Fragment>
        <Blog />
      </React.Fragment>
      <React.Fragment>
        <Projects />
      </React.Fragment>
      <footer>
        <Contact />
      </footer>
    </body>
  );
}