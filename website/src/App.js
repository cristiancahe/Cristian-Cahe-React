import React from 'react';
import Navbar from './components/navbar';
import Blog from './components/blog';
import Projects from './components/projects';
import Contact from './components/contact';
import './styles/main.css';

export default function App() {
  return (
    <body>
      <div>
        <Navbar />
      </div>
      <div className="hero">
        <h1>Hi, this website is under reconstruction.</h1>
        <h1>Check back soon, it should be ready by <i>then</i>.</h1>
      </div>
      <div>
        <Blog />
      </div>
      <div>
        <Projects />
      </div>
      <footer>
        <Contact />
      </footer>
    </body>
  );
}