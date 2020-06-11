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
        <h1>Hi, this website is under reconstruction.</h1>
        <h2><i>Check back soon, it should be ready by then.</i></h2>
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