import { render } from "@testing-library/react";
import React, { useState, Component } from "react";
import { Container } from "reactstrap";
import { ThemeProvider } from "styled-components";
// Assets
import video1 from "../assets/clouds.mp4";
import video2 from "../assets/sunbg.mp4";

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
    };
  }
  render() {
    return (
      <Container fluid className="fluid-cont">
        <div className="mode-btn">
          <div className="btn">
            <WiDaySunny
              onClick={() =>
                this.setState({
                  linkColor: "link-lighttheme",
                  video: video2,
                })
              }
              size="40px"
              className="color-icon"
            />
            <h1 className="divider">/</h1>
            <WiMoonWaxingCrescent1
              onClick={() =>
                this.setState({ linkColor: "link", video: video1 })
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
            href="https://github.com/isamazon"
          >
            <SiIndeed size="30px" className="github-icon" />
          </a>
          <a className={this.state.linkColor} href="">
            <FaLinkedinIn size="30px" className="pdf" />
          </a>
          <a className={this.state.linkColor} href="">
            <HiOutlineDocumentDownload size="35px" className="pdf" />
          </a>
        </div>
        <video
          className="video1"
          autoPlay
          muted
          loop
          src={this.state.video}
        ></video>
        <Container className="main-cont">
          <h1 className="welcome-h1">WELCOME</h1>
          <h1 className="name-h1">Im isaiah mazon,</h1>
          <h1 className="dev-h1">FRONT END WEB DEV</h1>
        </Container>
      </Container>
    );
  }
}

export default Landing;
