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
import './ahes.css';
// imgs
import Blookify from '../../../assets/blookify.PNG';

import Humble from '../../../assets/humble.PNG';
import PortfolioPic from '../../../assets/portfolio.PNG';
// Components
import Ahesitems from '../../../assets/ahesitems.png';
import SideMenu from '../../sidemenu/sidemenu';
// Icons
import { FaGithub, FaLinkedin, FaRegFileAlt, FaGlobe } from 'react-icons/fa';
import { SiIndeed } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
// Sound
import Sound1 from '../../../assets/clicksfx.mp3';
class Ahes extends React.Component {
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
      intitalP: 'American house hold estate sales is a fullstack application',
      intialPclass: 'text-content-container',
    });
  }
  handleClick2() {
    this.playAudio();
    this.setState({
      intitalP:
        'American house hold estate sales is a fullstack application built for a client needing to display his upcoming sale information and items to his customers.',
      intialPclass: 'text-content-container',
    });
  }
  handleClick3() {
    this.playAudio();
    this.setState({
      intitalP:
        'American house hold estate sales is a fullstack application built for a client needing to display his upcoming sale information and items to his customers. This is done by allowing the client to add and delete and change the description and pictures of the upcoming sale on a whim utilizing base64 for the photos.',
      intialPclass: 'text-content-container',
    });
  }
  handleClick4() {
    this.playAudio();
    this.setState({
      intitalP:
        'American house hold estate sales is a fullstack application built for a client needing to display his upcoming sale information and items to his customers. This is done by allowing the client to add and delete and change the description and pictures of the upcoming sale on a whim utilizing base64 for the photos.',
      intialPclass: 'text-content-container-long',
    });
  }
  handleClick5() {
    this.playAudio();
    this.setState({
      intitalP:
        'American house hold estate sales is a fullstack application built for a client needing to display his upcoming sale information and items to his customers. This is done by allowing the client to add and delete and change the description and pictures of the upcoming sale on a whim utilizing base64 for the photos. The tech im using with this project is Node.js and express for the backend sqlite3 for the DB and React for the front end. This project was my first experience building a fully functional CRUD application for a client.',
      intialPclass: 'text-content-container-long',
    });
  }
  render() {
    //   REACT SLIDER SETTINGS
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="ahes-page-cont">
        <SideMenu
          // Links p
          linksp="linksp ahesp"
          // Main container
          maincontainer="side-menu-container ahes"
          // Icon color
          iconcolor="#a8dadc"
          // Links color
          linkcolor={{ color: '#a8dadc' }}
        />
        <Col xl={4} md={12} className="info-container">
          <div className={this.state.intialPclass}>
            <Fade bottom cascade>
              <h1 className="AHES-h1-1">A.H.E.S</h1>
            </Fade>
            <Fade bottom cascade>
              <div className="button-container">
                <a
                  href="https://github.com/isamazon"
                  target="_blank"
                  className="link-container"
                >
                  <Button className="link-button">
                    <FaGithub className="icon" /> Source Code
                  </Button>
                </a>
                <a
                  href="https://www.americanhouseholdestatesales.com/"
                  target="_blank"
                  className="link-container"
                >
                  <Button className="link-button">
                    <FaGlobe className="icon" /> Live site
                  </Button>
                </a>
              </div>
            </Fade>
            <Fade bottom cascade>
              <div className="adjust-container">
                <p>Adjust info length:</p>
                <div className="button-cnt">
                  <label
                    htmlFor="button"
                    className="radio"
                    onClick={this.handleClick}
                  >
                    <input type="radio" name="button" className="button" />
                    <div className="radio__radio"></div>
                  </label>
                  <label
                    htmlFor="button"
                    className="radio"
                    onClick={this.handleClick2}
                  >
                    <input type="radio" name="button" className="button" />
                    <div className="radio__radio"></div>
                  </label>
                  <label
                    htmlFor="button"
                    className="radio"
                    onClick={this.handleClick3}
                  >
                    <input type="radio" name="button" className="button" />
                    <div className="radio__radio"></div>
                  </label>
                  <label
                    htmlFor="button"
                    className="radio"
                    onClick={this.handleClick4}
                  >
                    <input type="radio" name="button" className="button" />
                    <div className="radio__radio"></div>
                  </label>
                  <label
                    htmlFor="button"
                    className="radio"
                    onClick={this.handleClick5}
                  >
                    <input type="radio" name="button" className="button" />
                    <div className="radio__radio"></div>
                  </label>
                </div>
                <div className="button-text">
                  <p className="shortest">Shortest</p>
                  <p className="longest">Longest</p>
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <p className="ahes-p">{this.state.intitalP}</p>
            </Fade>
            <Fade bottom cascade>
              <div className="important-links">
                <a
                  href="https://github.com/isamazon"
                  onMouseEnter={this.handleHover}
                  onMouseLeave={this.handleHover}
                  className="link"
                >
                  <FaGithub size="45" className="icon" />
                  <Zoom opposite when={this.state.show}>
                    <p className="icon-text">Github</p>
                  </Zoom>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/isaiah-mazon-1786b8206/"
                  onMouseEnter={this.handleHover2}
                  onMouseLeave={this.handleHover2}
                  className="link"
                >
                  <FaLinkedin size="45" className="icon" />
                  <Zoom opposite when={this.state.show2}>
                    <p className="icon-text">LinkedIn</p>
                  </Zoom>
                </a>
                {/* Indeed */}
                {/* <a
                  href="https://my.indeed.com/resume?hl=en&co=US&from=gnav-homepage&_ga=2.1294257.1439842392.1633753792-1298732303.1633753792"
                  onMouseEnter={this.handleHover3}
                  onMouseLeave={this.handleHover3}
                  className="link"
                >
                  <SiIndeed size="45" className="icon" />
                  <Zoom opposite when={this.state.show3}>
                    <p className="icon-text">Indeed</p>
                  </Zoom>
                </a> */}
                <a
                  href="../../../assets/resume.pdf"
                  download
                  onMouseEnter={this.handleHover4}
                  onMouseLeave={this.handleHover4}
                  className="link"
                >
                  <FaRegFileAlt size="45" className="icon" />
                  <Zoom opposite when={this.state.show4}>
                    <p className="icon-text">Resume</p>
                  </Zoom>
                </a>
                <a
                  href="https://github.com/isamazon"
                  onMouseEnter={this.handleHover5}
                  onMouseLeave={this.handleHover5}
                  className="link"
                >
                  <FiMail size="45" className="icon" />
                  <Zoom opposite when={this.state.show5}>
                    <p className="icon-text">Email me</p>
                  </Zoom>
                </a>
              </div>
            </Fade>
          </div>
        </Col>
        <Col xl={8} md={12} className="right-col">
          <img src={Ahesitems} alt="" className="ahes-img" />
          <div className="ahes-gradient-box"></div>
          {/* SLider */}
          <Slider {...settings} className="project-container">
            <div className="img-container">
              <img
                src={Blookify}
                onClick={this.props.blookifytoggle}
                alt=""
                className="project-imgs"
              />
            </div>
            <div className="img-container">
              <img
                src={PortfolioPic}
                onClick={this.props.portfoliotoggle}
                alt=""
                className="project-imgs"
              />
            </div>
            <div className="img-container">
              <img
                src={Humble}
                onClick={this.props.humbletoggle}
                alt=""
                className="project-imgs"
              />
            </div>
          </Slider>
        </Col>
      </div>
    );
  }
}

export default Ahes;
