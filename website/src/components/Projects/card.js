import React from 'react';


export default function ProjectCards() {
  return (
    <div className="cardContainer">
      <div className="card">
        <h4>Salvo Game On!</h4>
        <span>Web</span>
        <p>Sea battle game project developed with Java.</p>
      </div>
      <div className="card">
        <h4>UNIntercambio</h4>
        <span >In development <span role="img" aria-label="In construction">🚧</span></span>
        <p>Platform for the exchange of university material.</p>
      </div>
      <div className="card">
        <h4>MNBA</h4>
        <span>Android and iOS</span>
        <p>Tour guide app for the Fine Arts Museum of Argentina.</p>
      </div>
      <div className="card">
        <h4>Catedral de La Plata</h4>
        <span>Android and iOS</span>
        <p>Tour guide app for the Cathedral of La Plata.</p>
      </div>
    </div>
  );
}