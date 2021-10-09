import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './components/home.css';
// components
import Portfolio from './components/landingpages/portfolio';
import Blookify from './components/landingpages/blookify/blookify';
function Home() {
  // Setting initial state for page
  const [portfolio, setPorfolio] = useState(true);
  const TogglePortfolio = () => {
    setPorfolio(true);
    setBlookify(false);
  };
  const [blookify, setBlookify] = useState(false);
  const ToggleBlookify = () => {
    console.log('click');
    setPorfolio(false);
    setBlookify(true);
  };
  if (portfolio) {
    return (
      <div fluid className="home-container">
        <Portfolio
          ahestoggle
          blookifytoggle={ToggleBlookify}
          humbletoggle
          portfoliotoggle
        />
      </div>
    );
  } else if (blookify) {
    return (
      <div fluid className="home-container">
        <Blookify ahestoggle portfoliotoggle={TogglePortfolio} />
      </div>
    );
  } else {
    return (
      <div fluid className="home-container">
        <Portfolio
          ahestoggle
          blookifytoggle={ToggleBlookify}
          humbletoggle
          portfoliotoggle
        />
      </div>
    );
  }
}

export default Home;
