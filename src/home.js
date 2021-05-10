import React, { useEffect, useRef } from "react";
// components
import Navbar from "./components/navbar";

import Landing from "./components/landingpage";
// CSS
import "./CSS/landingpage.css";

// Dependancies
import { Col, Container, Row } from "reactstrap";

// Scroll to function
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Home = () => {
  return (
    <div className="parent-cont">
      
      <Landing />
    </div>
  );
};

export default Home;
