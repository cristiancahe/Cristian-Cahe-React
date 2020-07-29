import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProjectCards from './card';

export default function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div>
        <Grid>
          <ProjectCards />
        </Grid>
      </div>
    </div>
  );
}