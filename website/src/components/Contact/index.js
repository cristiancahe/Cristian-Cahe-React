import React from 'react';


export default function Contact() {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <div className="links">
        <a href="mailto:contact@madebycristian.com?subject=Hello Cristian!"><i class="far fa-envelope" /></a>
        <a href="https://www.linkedin.com/in/cgcahe/" rel="noreferrer noopener" target="_blank"><i class="fab fa-linkedin-in" /></a>
        <a href="https://www.github.com/pizzadeparado" rel="noreferrer noopener" target="_blank"><i class="fab fa-github" /></a>
        <a href="https://www.twitter.com/pizzadeparado" rel="noreferrer noopener" target="_blank"><i class="fab fa-twitter" /></a>
      </div>
    </div>
  );
}