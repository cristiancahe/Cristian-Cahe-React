import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './card';
// import Card from '@material-ui/core/Card';

export default function Projects() {
  return (
    <div className="projects">
      <h2>Projects.</h2>
      <Grid container direction="row">
        <ProjectCard />
      </Grid>
    </div>
  );
}