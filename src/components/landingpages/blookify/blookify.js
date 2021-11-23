import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { Button } from '@material-ui/core';
// CSS
import './blookify.css';
// imgs
import Ahes from '../../../assets/ahes.PNG';
import Humble from '../../../assets/humble.PNG';
import PortfolioPic from '../../../assets/portfolio.PNG';
// Components
import Blookifyimg from '../../../assets/blookifyimg.png';
import SideMenu from '../../sidemenu/sidemenu';
// Icons
import { FaGithub, FaLinkedin, FaRegFileAlt, FaGlobe } from 'react-icons/fa';

import { FiMail } from 'react-icons/fi';
// Sound
import Sound1 from '../../../assets/clicksfx.mp3';
class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      intitalP: 'Click above for project info :)',
      intialPclass: 'text-content-container',
    };
    this.handleHover = this.handleHover.bind(this);
    this.handleHover2 = this.handleHover2.bind(this);
    this.handleHover3 = this.handleHover3.bind(this);
    this.handleHover4 = this.handleHover4.bind(this);
    this.handleHover5 = this.handleHover5.bind(this);
    //   Paragraph
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
    this.handleClick5 = this.handleClick5.bind(this);
  }
  // Audio
  playAudio = () => {
    new Audio(Sound1).play();
  };
  handleHover() {
    this.setState({ show: !this.state.show });
  }
  handleHover2() {
    this.setState({ show2: !this.state.show2 });
  }
  handleHover3() {
    this.setState({ show3: !this.state.show3 });
  }
  handleHover4() {
    this.setState({ show4: !this.state.show4 });
  }
  handleHover5() {
    this.setState({ show5: !this.state.show5 });
  }
  //
  handleClick() {
    this.playAudio();
    this.setState({
      intitalP: 'Blookify is a fullstack MERN app',
      intialPclass: 'text-content-container',
    });
  }
  handleClick2() {
    this.playAudio();
    this.setState({
      intitalP:
        'Blookify is a fullstack application using the MERN stack utilizing the GOOGLE books api.',
      intialPclass: 'text-content-container',
    });
  }
  handleClick3() {
    this.playAudio();
    this.setState({
      intitalP:
        'Blookify is a fullstack application using the MERN stack utilizing the GOOGLE books api. And giving the user the ability to send books they have already read or are reading currently to their very own library',
      intialPclass: 'text-content-container',
    });
  }
  handleClick4() {
    this.playAudio();
    this.setState({
      intitalP:
        'Blookify is a full stack MERN application also using googleOauth and also has user authenification using JWT middleware.And giving the user the ability to send books they have already read or are reading currently to their very own library. This project is showcasing my skills in the MERN stack by showing efficiency in the backend creating endpoints and functionality and connecting all of that to the front end using redux for state management and showcasing the ability of using react hooks like useState, useEffect and useRef.',
      intialPclass: 'text-content-container-long',
    });
  }
  handleClick5() {
    this.playAudio();
    this.setState({
      intitalP:
        'Blookify is a fullstack application using the MERN tech stack, blookify utilizes the GOOGLE books api utilizing over seven millions books for the users disposal giving them the option to send whatever book they are currently reading or whatver books theyve already read to their own personal libraries! Utilizing the API built using Nodejs/Express for the backend and MongoDB as the database! This application was a passion project for me not only because im a big book reader but it also really taught me how the backend works and how to create databases to store user data!',
      intialPclass: 'text-content-container-long',
    });
  }
  render() {
    return (
      <div className="blookify-page-cont">
        <Col xl={4} md={12} className="info-container"></Col>
        <Col xl={8} md={12} className="right-col"></Col>
      </div>
    );
  }
}

export default Portfolio;
