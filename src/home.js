import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './components/home.css';
// components
import Portfolio from './components/landingpages/portfolio';
import Blookify from './components/landingpages/blookify/blookify';
import Ahes from './components/landingpages/ahes/ahes';
import Humble from './components/landingpages/humble/humblenutrition';
// transition images
import Transition1 from './assets/transition2.png';
function Home() {
  return (
    <div fluid className="home-container">
      <Portfolio />
      <div className="transition-img-cont"></div>
      <Blookify />
      <div className="transition-img-cont2"></div>
      <Ahes />
      <div className="transition-img-cont3"></div>
      <Humble />
      <div className="transition-img-cont4"></div>
    </div>
  );
}

export default Home;
