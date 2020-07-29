import React from 'react';
import Grid from '@material-ui/core/Grid';
import Navbar from '../Navbar'
import About from '../About';
import Blog from '../Blog';
import Projects from '../Projects';
import Contact from '../Contact';
import Lab from '../Lab';
import '../../styles/main.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <About />
      <div className="mobile">
        <Projects />
        <Lab />
        <Blog />
      </div>
      <div className="desktop">
        <Grid container direction="row" justify="space-between" alignItems="center">
          <Projects />
          <Lab />
        </Grid>
        <Blog />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}