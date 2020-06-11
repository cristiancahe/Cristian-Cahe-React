import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'

export default function Contact() {
  return (
    <Grid className="contact" container direction="row" justify="space-evenly">
      <Box><h2>Contact</h2></Box>
      <Box><h2>Lab</h2></Box>
    </Grid>
  );
}