import { render } from "@testing-library/react";
import React, { useState, Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ThemeProvider } from "styled-components";
// Assets
import video1 from "../assets/clouds.mp4";
import video2 from "../assets/sunbg.mp4";
import resume from "../assets/isaiahsresume.pdf";
// Icons

import { FaGithub, FaLinkedinIn, FaRegMoon, FaSun } from "react-icons/fa";
import { WiDaySunny, WiMoonWaxingCrescent1 } from "react-icons/wi";
import { SiIndeed } from "react-icons/si";
import { FcDocument } from "react-icons/fc";
import { HiOutlineDocumentDownload } from "react-icons/hi";
// Components

class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      linkColor: "link",
      video: video1,
      welcome: "welcome-h1",
      devh1: "dev-h1",
      lp2BG: "projects-fluid-cnt",
    };
  }
  render() {
    return (
      <div className="parent-cont">
        <Container fluid className="fluid-cont">
          <div className="mode-btn">
            <div className="btn">
              <WiDaySunny
                onClick={() =>
                  this.setState({
                    linkColor: "link-lighttheme",
                    video: video2,
                    welcome: "welcome-h1-light",
                    devh1: "dev-h1-light",
                    lp2BG: "projects-fluid-cnt projects-lightBG",
                  })
                }
                size="40px"
                className="color-icon"
              />
              <h1 className="divider">/</h1>
              <WiMoonWaxingCrescent1
                onClick={() =>
                  this.setState({
                    linkColor: "link",
                    video: video1,
                    welcome: "welcome-h1",
                    devh1: "dev-h1",
                    lp2BG: "projects-fluid-cnt",
                  })
                }
                size="40px"
                className="color-icon-2"
              />
            </div>
          </div>
          <div className="link-container">
            <a
              className={this.state.linkColor}
              href="https://github.com/isamazon"
            >
              <FaGithub size="30px" className="github-icon" />
            </a>
            <a
              className={this.state.linkColor}
              href="https://my.indeed.com/p/isaiahm-pujw7f2"
            >
              <SiIndeed size="30px" className="github-icon" />
            </a>
            <a
              className={this.state.linkColor}
              href="https://www.linkedin.com/in/isaiah-mazon-1786b8206/"
            >
              <FaLinkedinIn size="30px" className="pdf" />
            </a>
            <a
              className={this.state.linkColor}
              href={resume}
              download="isaiah Mazon Resume"
            >
              <HiOutlineDocumentDownload size="35px" className="pdf" />
            </a>
          </div>
          <video
            className="video1"
            src={this.state.video}
            autoPlay
            muted
            loop
          ></video>
          <Container className="main-cont">
            <h1 className={this.state.welcome}>WELCOME</h1>
            <h1 className="name-h1">Im isaiah mazon,</h1>
            <h1 className={this.state.devh1}>FRONT END WEB DEV</h1>
          </Container>
        </Container>
        <Container fluid className={this.state.lp2BG}>
          <Container className="projects-cnt">
            <Row>
              <Col>
                <h1>ee</h1>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    );
  }
}

export default Landing;
