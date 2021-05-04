import React, { useEffect } from "react";
// components
import Navbar from "./components/navbar";
import Landing from "./components/landingpage";
// CSS
import "./CSS/landingpage.css";

// Dependancies
import { Col, Container, Row } from "reactstrap";
const Home = () => {
  return (
    <div className="parent-cont">
      <Navbar />
      <Landing />
    </div>
  );
};

export default Home;
