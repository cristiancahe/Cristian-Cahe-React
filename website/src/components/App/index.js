import React from 'react';
import Grid from '@material-ui/core/Grid';
import BootstrapNavbar from '../Navbar'
import About from '../About';
import Blog from '../Blog';
import Projects from '../Projects';
import Contact from '../Contact';
import Lab from '../Lab';
import '../../styles/main.css';

export default function App() {
  return (
    <div>
      <BootstrapNavbar />
      <About />
      <Grid container direction="column" justify="space-between" alignItems="center">
        <Projects />
        <Lab />
        <Blog />
      </Grid>
      <div>
        <Contact />
      </div>
    </div>
  );
}