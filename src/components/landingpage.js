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
import html from "../assets/html5.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import sass from "../assets/sass.png";
import mongoDB from "../assets/mongodb.png";
import node from "../assets/node.png";
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
      projimg3: SVG.CointrackerD,
      projimg4: SVG.BlookifyD,
      logoimg: logo2,
      png1: humbleDpng,
      projectnumber: "project-number dark-text",
      projectname: "project-name dark-text",
      btn: "btn-1 btn-dark",
      projectdesc: "project-p dark-text",
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
                        projimg3: SVG.CointrackerL,
                        projimg4: SVG.BlookifyL,
                        logoimg: logo,
                        png1: humbleLpng,
                        btn: "btn-1 btn-light",
                        projectnumber: "project-number light-text",
                        projectname: "project-name light-text",
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
                        projimg3: SVG.CointrackerD,
                        projimg4: SVG.BlookifyD,
                        logoimg: logo2,
                        png1: humbleDpng,
                        btn: "btn-1 btn-dark",
                        projectnumber: "project-number dark-text",
                        projectname: "project-name dark-text",
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
          {/* Project 1 */}
          <Slide className="slide2">
            <Container fluid className={this.state.lp2BG}>
              <Projectcard
                projectnumber="Project 1:"
                projectnameclass={this.state.projectname}
                projectdescclass={this.state.projectdesc}
                projectdesc="Humble nutrition is a website that i made for a local company located in Albuquerque New Mexico using modern ui and ux design techniques to increase vistors interaction with the website developing a strong impression on the customer due to the websites interaction and experience"
                headerclass1={this.state.projectnumber}
                githublink="https://github.com/isamazon/Humble-Nutrtion"
                projectname="Humble nutrition"
                svg={this.state.projimg2}
                png={this.state.png1}
                btn1={this.state.btn}
                img1={html}
                img2={css}
                img3={sass}
              />
            </Container>
          </Slide>
          {/* Project 2 */}
          <Slide className="slide2">
            <Container fluid className={this.state.lp2BG}>
              <Projectcard2
                projectnumber="Project 2:"
                projectnameclass={this.state.projectname}
                projectdescclass={this.state.projectdesc}
                projectdesc="Blookify is a fullstack MERN application that gives users the ability to keep track of books theyre reading or currently reading by utilizing the google books api users have access to over 7 million books to add to their collection."
                headerclass1={this.state.projectnumber}
                githublink="https://github.com/isamazon/Humble-Nutrtion"
                projectname="Blookify"
                svg={this.state.projimg4}
                btn1={this.state.btn}
                img1={react}
                img2={css}
                img3={sass}
                img4={mongoDB}
                img5={node}
              />
            </Container>
          </Slide>
          {/* Project 3 */}
          <Slide className="slide2">
            <Container fluid className={this.state.lp2BG}>
              <Projectcard
                projectnumber="Project 2:"
                projectname="Shounen fit"
                svg={this.state.projimg3}
              />
            </Container>
          </Slide>
        </FullPage>
      </div>
    );
  }
}

export default Landing;
