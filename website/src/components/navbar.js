import React from 'react';
import Grid from '@material-ui/core/Grid';
import Logo from '../images/logo.png';
import Button from './button';

export default function Navbar() {
  return (
    <React.Fragment>
      <Grid container direction="row" justify="space-between" alignItems="center" className="navbar">
        <img src={ Logo } alt="memoji" />
        {/* <h3>*not from this bitch &rarr; @kojaqk.</h3> */}
        <Button />
      </Grid>
    </React.Fragment>
  );
}