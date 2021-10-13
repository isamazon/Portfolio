import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './components/home.css';
// components
import Portfolio from './components/landingpages/portfolio';
import Blookify from './components/landingpages/blookify/blookify';
import Ahes from './components/landingpages/ahes/ahes';
import Humble from './components/landingpages/humble/humblenutrition';
function Home() {
  // Setting initial state for page
  const [portfolio, setPorfolio] = useState(true);
  const TogglePortfolio = () => {
    setPorfolio(true);
    setBlookify(false);
    setHumle(false);
    setAhes(false);
  };
  const [blookify, setBlookify] = useState(false);
  const ToggleBlookify = () => {
    setPorfolio(false);
    setBlookify(true);
    setHumle(false);
    setAhes(false);
  };
  const [ahes, setAhes] = useState(false);
  const ToggleAhes = () => {
    setPorfolio(false);
    setBlookify(false);
    setHumle(false);
    setAhes(true);
  };
  const [humble, setHumle] = useState(false);
  const ToggleHubmle = () => {
    setPorfolio(false);
    setBlookify(false);
    setAhes(false);
    setHumle(true);
  };
  if (portfolio) {
    return (
      <div fluid className="home-container">
        <Portfolio
          ahestoggle={ToggleAhes}
          blookifytoggle={ToggleBlookify}
          humbletoggle={ToggleHubmle}
        />
      </div>
    );
  } else if (blookify) {
    return (
      <div fluid className="home-container">
        <Blookify
          ahestoggle={ToggleAhes}
          portfoliotoggle={TogglePortfolio}
          humbletoggle={ToggleHubmle}
        />
      </div>
    );
  } else if (ahes) {
    return (
      <div fluid className="home-container">
        <Ahes
          portfoliotoggle={TogglePortfolio}
          blookifytoggle={ToggleBlookify}
          humbletoggle={ToggleHubmle}
        />
      </div>
    );
  } else if (humble) {
    return (
      <div fluid className="home-container">
        <Humble
          portfoliotoggle={TogglePortfolio}
          blookifytoggle={ToggleBlookify}
          ahestoggle={ToggleAhes}
        />
      </div>
    );
  }
}

export default Home;
