import React from 'react';
import { Container } from 'react-bootstrap';
import './components/home.css';
// components
import Portfolio from './components/landingpages/portfolio';
function Home() {
  // Setting initial state for page

  return (
    <Container fluid className="home-container">
      <Portfolio />
    </Container>
  );
}

export default Home;
