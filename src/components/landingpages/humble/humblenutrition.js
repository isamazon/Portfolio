import React from 'react';
import { Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { Button } from '@material-ui/core';
// CSS
import './humble.css';

// Sound
import Sound1 from '../../../assets/clicksfx.mp3';
// Components

import Youtube from '../../youtube';
// Icons
import { FaGithub, FaGlobe, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { SiSass, SiJavascript, SiPhp } from 'react-icons/si';

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      //   Paragraph
      intitalP: 'Click the circles above for bio :)',
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
    // Portfolio pic/component
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
      intitalP: 'Humble nutrition is a front end only webpage.',
      intialPclass: 'text-content-container',
    });
  }
  handleClick2() {
    this.playAudio();
    this.setState({
      intitalP:
        'Humble nutrition is a static webpage made for the small buisness located in Albuquerque New Mexico',
      intialPclass: 'text-content-container',
    });
  }
  handleClick3() {
    this.playAudio();
    this.setState({
      intitalP:
        'Humble nutrition is a static webpage made for the small buisness located in Albuquerque New Mexico. This web page was made with HTML5, CSS, SCSS and vanilla javascript.',
      intialPclass: 'text-content-container',
    });
  }
  handleClick4() {
    this.playAudio();
    this.setState({
      intitalP:
        'Humble nutrition is a static webpage made for the small buisness located in Albuquerque New Mexico. This web page was made with HTML5, CSS, SCSS and vanilla javascript. This page was built with the intent to give the small buisness a face on the internet and a base for all their customers to come and look at the menu.',
      intialPclass: 'text-content-container-long',
    });
  }
  handleClick5() {
    this.playAudio();
    this.setState({
      intitalP:
        'Humble nutrition is a static webpage made for the small buisness located in Albuquerque New Mexico. This web page was made with HTML5, CSS, SCSS and vanilla javascript. This page was built with the intent to give the small buisness a face on the internet and a base for all their customers to come and look at the menu. This project was my first real client work my duty was to carry out the clients wishes to make a fresh modern responsive page for all device',
      intialPclass: 'text-content-container-long',
    });
  }

  render() {
    return (
      <div className="humble-page-cont">
        <Col xl={6} md={12} className="info-container">
          <Youtube urlplayer="https://youtu.be/8827OSG1XoI" />
          <a className="link-container" href="">
            <FaGithub className="link-icon" />
            Gitub
          </a>
          <a className="link-container" href="">
            <FaGlobe className="link-icon" />
            Live demo
          </a>
          <h1 className="project-title">Client work:</h1>
        </Col>
        <Col xl={7} md={12} className="right-col">
          <h1 className="project-name">
            Humble <span className="nutrition">Nutrition</span>
          </h1>

          <div className="tech-used-container">
            <h1>Tech used</h1>
            <div className="tech">
              <FaHtml5 className="tech-icon" />
              <FaCss3Alt className="tech-icon" />
              <SiSass className="tech-icon" />
              <SiJavascript className="tech-icon" />
              <SiPhp className="tech-icon" />
            </div>
          </div>

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

          <p className="humble-p">{this.state.intitalP}</p>
        </Col>
      </div>
    );
  }
}

export default Portfolio;
