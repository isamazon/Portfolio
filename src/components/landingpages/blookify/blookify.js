import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Fade from 'react-reveal/Fade';
import { Button } from '@material-ui/core';
// CSS
import './blookify.css';
// imgs
import Blookify from '../../../assets/blookify.PNG';
import Ahes from '../../../assets/ahes.PNG';
import Humble from '../../../assets/humble.PNG';
import PortfolioPic from '../../../assets/portfolio.PNG';
// Components
import Blookifyimg from '../../../assets/blookifyimg.png';
class Portfolio extends React.Component {
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
      <div className="blookify-page-cont">
        <Col xl={4} className="info-container">
          <div className="text-content-container">
            <Fade bottom cascade>
              <h1 className="blookify-h1-1">Blookify</h1>
            </Fade>
          </div>
        </Col>
        <Col xl={8} className="right-col">
          <img src={Blookifyimg} alt="" className="blookify-img" />
          <div className="blookify-gradient-box"></div>
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
            <div className="img-container">
              <img
                src={Blookify}
                onClick={this.props.blookifytoggle}
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

export default Portfolio;
