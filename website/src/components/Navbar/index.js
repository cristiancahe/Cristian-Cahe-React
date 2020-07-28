import React from 'react';
import Grid from '@material-ui/core/Grid';
import Logo from '../../images/logo2.png';
import ContactButton from './contactButton';


export default function BootstrapNavbar() {
  return (
    <Grid className="navbar">
      <img src={Logo} alt="logo" tabIndex="0" />
      <ContactButton tabIndex="1" />
    </Grid>
  );
}