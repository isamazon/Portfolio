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
// imgs
import Blookify from '../../../assets/blookify.PNG';
import Ahes from '../../../assets/ahes.PNG';
import Humble from '../../../assets/humble.PNG';

import Drink3 from '../../../assets/humbledrink3.png';
import Drink4 from '../../../assets/humbledrink4.png';
import Drink5 from '../../../assets/humbledrink5.png';
// Sound
import Sound1 from '../../../assets/clicksfx.mp3';
// Components
import SideMenu from '../../sidemenu/sidemenu';
// Icons
import { FaGithub, FaLinkedin, FaRegFileAlt, FaGlobe } from 'react-icons/fa';

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
    //   REACT SLIDER SETTINGS
    const settings = {
      dots: false,
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
      <div className="humble-page-cont">
        <SideMenu
          linksp="linksp portfoliop"
          maincontainer="side-menu-container"
          // Icon color
          iconcolor="#7de2d1"
          // Links color
          linkcolor={{ color: '#7de2d1' }}
          //   Link text color
          linkpcolor={{ color: 'white' }}
        />
        <Col xl={4} md={12} className="info-container">
          <div className={this.state.intialPclass}>
            <Fade bottom cascade>
              <h1 className="humble-h1-1">
                Humble <span className="humble-h1-2">Nutrition</span>
              </h1>
            </Fade>
            <Fade bottom cascade>
              <div className="button-container">
                <a
                  href="https://github.com/isamazon/Humble-Nutrtion"
                  target="_blank"
                  className="link-container"
                >
                  <Button className="link-button">
                    <FaGithub className="icon" /> Source Code
                  </Button>
                </a>
                <a
                  href="https://humblenutritionnm.com/"
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
                  href="https://github.com/isamazon/Humble-Nutrtion"
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
          <div className="imgs-container">
            <img src={Drink3} className="drinkimg img3" alt="" />
            <img src={Drink4} className="drinkimg img4" alt="" />
            <img src={Drink5} className="drinkimg img5" alt="" />
          </div>
          <div className="gradient-box"></div>
          {/* SLider */}
          <div className="slider-container">
            <p className="projects-p">
              Click images above to view each project
            </p>
            <Slider {...settings} className="project-container">
              <div className="img-container">
                <img
                  src={Ahes}
                  onClick={this.props.ahestoggle}
                  alt=""
                  className="project-imgs"
                />
              </div>
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
                  src={Humble}
                  alt=""
                  onClick={this.props.humbletoggle}
                  className="project-imgs"
                />
              </div>
            </Slider>
          </div>
        </Col>
      </div>
    );
  }
}

export default Portfolio;
