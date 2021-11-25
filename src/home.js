import React, { useState, useRef } from 'react';
import { Container } from 'react-bootstrap';
import './components/home.css';
// Dependencies
import { Element } from 'react-scroll';
// components
import Portfolio from './components/landingpages/portfolio';
import Blookify from './components/landingpages/blookify/blookify';
import Ahes from './components/landingpages/ahes/ahes';
import Humble from './components/landingpages/humble/humblenutrition';
import Nav from './components/navbar/navbar';
// transition images
import Transition1 from './assets/transition2.png';
const Home = () => {
  const myRef = useRef(null);

  const scrollTest = () => {
    if (window.scrollY >= myRef && window.scrollY < myRef) {
      console.log('hello');
    }
  };
  window.addEventListener('scroll', scrollTest);
  return (
    <div fluid className="home-container">
      <Nav
        toproject0="project0"
        toproject1="project1"
        toproject2="project2"
        toproject3="project3"
      />
      <Element ref={myRef} className="element0" name="project0"></Element>
      <Portfolio />
      <div className="transition-img-cont">
        <Element className="element1" name="project1"></Element>
      </div>
      <Blookify />
      <div className="transition-img-cont2">
        <Element className="element2" name="project2"></Element>
      </div>
      <Ahes />
      <div className="transition-img-cont3">
        <Element className="element3" name="project3"></Element>
      </div>
      <Humble />
      <div className="transition-img-cont4"></div>
    </div>
  );
};

export default Home;
