import React from 'react';
import Logo from '../../images/logo2.png';
import ContactButton from './contactButton';


export default function Navbar() {
  return (
    <div className="navbar">
      <img src={Logo} alt="logo" tabIndex="0" />
      <span>*drawing created by <a href="https://www.twitter.com/kojaqk" rel="noreferrer noopener" target="_blank">@kojaqk</a></span>
      <ContactButton tabIndex="1" />
    </div>
  );
}