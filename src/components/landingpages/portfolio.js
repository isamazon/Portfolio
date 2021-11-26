import React from 'react';
import { Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
// CSS
import './landingpage.css';
// SFX
import Sound1 from '../../assets/clicksfx.mp3';
// Components
import PortfolioImg from './portfolioimg';
import SideMenu from '../sidemenu/sidemenu';
// Icons
import { FaGithub, FaLinkedin, FaRegFileAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

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
      intitalP: 'I am a web dev',
      intialPclass: 'text-content-container',
    });
  }
  handleClick2() {
    this.playAudio();
    this.setState({
      intitalP: 'I am a self taught web dev living in Albuquerque New Mexico',
      intialPclass: 'text-content-container',
    });
  }
  handleClick3() {
    this.playAudio();
    this.setState({
      intitalP:
        'I am a self taught web dev living in Albuquerque New Mexico, specilizing in the MERN tech stack. I have experience with making fullstack applications for myself as passion projects and also for paying clients.',
      intialPclass: 'text-content-container',
    });
  }
  handleClick4() {
    this.playAudio();
    this.setState({
      intitalP:
        'I am a self taught web dev living in Albuquerque New Mexico, specilizing in the MERN tech stack i have experience with making fullstack applications for myself as passion projects and also for paying clients. I have been learning code since 2020 but ive been learing intensively when landing my first client in febuary 2021 building a static website for Humble Nutrition and in June 2021 i landed my first client in need of a fullstack application AHES',
      intialPclass: 'text-content-container-long',
    });
  }
  handleClick5() {
    this.playAudio();
    this.setState({
      intitalP:
        'I am a self taught web dev living in Albuquerque New Mexico, specilizing in the MERN tech stack i have experience with making fullstack applications for myself as passion projects and also for paying clients. I have been learning code since 2020 but ive been learing intensively when landing my first have been learning code intensively since january of 2021 landing my first client in febuary building a static website for Humble Nutrition and in June 2021 i landed my first client in need of a fullstack application AHES, im always eager to learn more and gain the experience in order to become the best developer i possibly can be!',
      intialPclass: 'text-content-container-long',
    });
  }

  render() {
    return (
      <div className="landing-page-cont">
        {/* <SideMenu
          linksp="linksp portfoliop"
          maincontainer="side-menu-container"
          // Icon color
          iconcolor="#7de2d1"
          // Links color
          linkcolor={{ color: '#7de2d1' }}
          //   Link text color
          linkpcolor={{ color: 'white' }}
        /> */}
        <Col xl={4} md={12} className="info-container">
          <div className={this.state.intialPclass}>
            <Fade bottom cascade>
              <h1 className="portfolio-h1-1">Hello,</h1>
            </Fade>
            <Fade bottom cascade>
              <h1 className="portfolio-h1-2">I'm Isaiah Mazon</h1>
            </Fade>
            <Fade bottom cascade>
              <h1 className="portfolio-h1-3">Web developer</h1>
            </Fade>
            <Fade bottom cascade>
              <div className="adjust-container">
                <p>Adjust bio length:</p>
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
              <p className="portfolio-p">{this.state.intitalP}</p>
            </Fade>
            <Fade bottom cascade>
              <div className="important-links">
                <a
                  href="https://github.com/isamazon/Portfolio"
                  target="_blank"
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
                  target="_blank"
                  onMouseEnter={this.handleHover2}
                  onMouseLeave={this.handleHover2}
                  className="link"
                >
                  <FaLinkedin size="45" className="icon" />
                  <Zoom opposite when={this.state.show2}>
                    <p className="icon-text">LinkedIn</p>
                  </Zoom>
                </a>
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
                  href="mailto: isaiahmazon0622@gmail.com"
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
          {/* <h1 className="tech-h1">
            Tech i know <BsArrowDownRight size="60" />
          </h1> */}
          <PortfolioImg cubeimg="cube-img" />
          <div className="gradient-box"></div>
        </Col>
      </div>
    );
  }
}

export default Portfolio;
