import React from 'react';
//import Logo from '../../images/logo.png';
import CovidLogo from '../../images/logo_mask.png'
//import ContactButton from './contactButton';


export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={CovidLogo} alt="logo" tabIndex="0" />
        {/* <span>&larr; Tap me!</span> */}
      </div>
      {/* <div className="button">
        <ContactButton tabIndex="1" />
      </div> */}
    </div>
  );
}