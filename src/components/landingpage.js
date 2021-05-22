import { render } from "@testing-library/react";
import React, { useState, Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/navbar";
import { FullPage, Slide } from "react-full-page";

// Assets
import video1 from "../assets/clouds.mp4";
import video2 from "../assets/sunbg.mp4";
import resume from "../assets/resume.pdf";
import BGdark from "../assets/BGdark.png";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
// SVGs

import SVG from "./svgs/SVG";
import portfolioD from "../assets/portfolioD.svg";
import portfolioL from "../assets/portfolioL.svg";
// PNGS
import humbleDpng from "../assets/humbleD.png";
import humbleLpng from "../assets/humbleL.png";
// Icons

import { FaGithub, FaLinkedinIn, FaRegMoon, FaSun } from "react-icons/fa";
import { WiDaySunny, WiMoonWaxingCrescent1 } from "react-icons/wi";
import { SiIndeed } from "react-icons/si";
import { FcDocument } from "react-icons/fc";
import { HiOutlineDocumentDownload } from "react-icons/hi";
// Components
import Projectcard from "./projectcard";
import Projectcard2 from "./project2";

class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      linkColor: "link",
      video: video1,
      welcome: "welcome-h1",
      devh1: "dev-h1",
      lp2BG: "projects-fluid-cnt",
      col1: "col-1",
      projimg1: SVG.ShounenD,
      projimg2: SVG.HumbleD,
      projimg3: portfolioD,
      logoimg: logo2,
      png1: humbleDpng,
    };
  }

  render() {
    return (
      <div className="parent-cont">
        <FullPage>
          <Navbar logoimg={this.state.logoimg} />
          <Slide>
            <Container id="home" fluid className="fluid-cont">
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
                        col1: "col-1",
                        projimg1: SVG.ShounenL,
                        projimg2: SVG.HumbleL,
                        projimg3: portfolioL,
                        logoimg: logo,
                        png1: humbleLpng,
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
                        col1: "col-1",
                        projimg1: SVG.ShounenD,
                        projimg2: SVG.HumbleD,
                        projimg3: portfolioD,
                        logoimg: logo2,
                        png1: humbleDpng,
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
                playsInline
                autoPlay
                muted
                loop
              ></video>
              <Container className="main-cont">
                <h1 className={this.state.welcome}>WELCOME</h1>
                <h1 className="name-h1">Im Isaiah Mazon:</h1>
                <h1 className={this.state.devh1}>FRONT END WEB DEV</h1>
                <div className="button-ctn">
                  <a className="button" href="mailto:isaiahmazon0622@gmail.com">
                    Contact me
                  </a>
                </div>
              </Container>
            </Container>
          </Slide>
          <Slide className="slide2">
            <Container fluid className={this.state.lp2BG}>
              <Projectcard
                projectnumber="Project 1:"
                projectname="humble nutrition"
                svg={this.state.projimg2}
                png={this.state.png1}
              />
            </Container>
          </Slide>
          <Slide className="slide2">
            <Container fluid className={this.state.lp2BG}>
              <Projectcard2
                projectnumber="Project 2:"
                projectname="Shounen fit"
                svg={this.state.projimg1}
              />
            </Container>
          </Slide>
          <Slide className="slide2">
            <Container fluid className={this.state.lp2BG}>
              <Projectcard
                projectnumber="Project 2:"
                projectname="Shounen fit"
                svg={this.state.projimg1}
              />
            </Container>
          </Slide>
        </FullPage>
      </div>
    );
  }
}

export default Landing;
