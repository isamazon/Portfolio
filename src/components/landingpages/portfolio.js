import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
// CSS
import './landingpage.css';
// imgs
import Blookify from '../../assets/blookify.PNG';
import Ahes from '../../assets/ahes.PNG';
import Humble from '../../assets/humble.PNG';
// Components
import PortfolioImg from './portfolioimg';
// Icons
import { FaGithub, FaLinkedin, FaRegFileAlt } from 'react-icons/fa';
import { SiIndeed } from 'react-icons/si';
class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      show2: false,
      show3: false,
      show4: false,
    };
    this.handleHover = this.handleHover.bind(this);
    this.handleHover2 = this.handleHover2.bind(this);
    this.handleHover3 = this.handleHover3.bind(this);
    this.handleHover4 = this.handleHover4.bind(this);
  }
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
  render() {
    //   REACT SLIDER SETTINGS
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };

    return (
      <div className="landing-page-cont">
        <Col xl={4} className="info-container">
          <div className="text-content-container">
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
              <p className="portfolio-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur velit ipsum odit dicta, sequi facilis temporibus
                soluta, porro quibusdam maiores possimus ipsam fugit rem,
                officiis ea sit totam eveniet asperiores!
              </p>
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
                <a
                  href="https://my.indeed.com/resume?hl=en&co=US&from=gnav-homepage&_ga=2.1294257.1439842392.1633753792-1298732303.1633753792"
                  onMouseEnter={this.handleHover3}
                  onMouseLeave={this.handleHover3}
                  className="link"
                >
                  <SiIndeed size="45" className="icon" />
                  <Zoom opposite when={this.state.show3}>
                    <p className="icon-text">Indeed</p>
                  </Zoom>
                </a>
                <a
                  href="https://github.com/isamazon"
                  onMouseEnter={this.handleHover4}
                  onMouseLeave={this.handleHover4}
                  className="link"
                >
                  <FaRegFileAlt size="45" className="icon" />
                  <Zoom opposite when={this.state.show4}>
                    <p className="icon-text">Resume</p>
                  </Zoom>
                </a>
              </div>
            </Fade>
          </div>
        </Col>
        <Col xl={8} className="right-col">
          <h1 className="tech-h1">Tech i know:</h1>
          <PortfolioImg />
          <div className="gradient-box"></div>
          {/* SLider */}
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
            <div className="img-container">
              <img
                src={Humble}
                alt=""
                onClick={this.props.portfoliotoggle}
                className="project-imgs"
              />
            </div>
          </Slider>
        </Col>
      </div>
    );
  }
}

export default Portfolio;
