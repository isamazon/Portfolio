import { render } from "@testing-library/react";
import React, { useState, Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/navbar";
import { FullPage, Slide } from "react-full-page";

// Assets
import video1 from "../assets/clouds.mp4";
import video2 from "../assets/sunbg.mp4";
import resume from "../assets/resume.pdf";

import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import html from "../assets/html5.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import sass from "../assets/sass.png";
import mongoDB from "../assets/mongodb.png";
import node from "../assets/node.png";
import javascript from "../assets/javascript.png";
import bootstrap from "../assets/bootstrap.png";
// SVGs

import SVG from "./svgs/SVG";
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
      projimg5: SVG.PortfolioD,
      logoimg: logo2,
      png1: humbleDpng,
      projectnumber: "project-number dark-text",
      projectname: "project-name dark-text",
      btn: "btn-1 btn-dark",
      projectdesc: "project-p dark-text",
    };
  }

  render() {
    new FullPage("#fullpage", {
      responiveWidth: 900,
    });
    return (
      <div className="parent-cont">
        {/* <FullPage id="fullpage"> */}
        <Navbar logoimg={this.state.logoimg} />
        <div>
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
                      projimg5: SVG.PortfolioL,
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
                      projimg5: SVG.PortfolioD,
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
        </div>
        {/* Project 1 */}

        <Container fluid className={this.state.lp2BG}>
          <Projectcard
            projectnumber="Project 1:"
            projectnameclass={this.state.projectname}
            projectdescclass={this.state.projectdesc}
            projectdesc="Humble nutrition is a website that i made and maintain, for a local company located in Albuquerque New Mexico using modern ui and ux design techniques to increase vistors interaction with the website developing a strong impression on the customer due to the websites interaction and experience"
            headerclass1={this.state.projectnumber}
            githublink="https://github.com/isamazon/Humble-Nutrtion"
            livelink="https://humblenutritionnm.com/"
            projectname="Humble nutrition"
            svg={this.state.projimg2}
            png={this.state.png1}
            btn1={this.state.btn}
            img1={html}
            img2={css}
            img3={sass}
            img4={javascript}
            img5={bootstrap}
          />
        </Container>

        {/* Project 2 */}

        <Container fluid className={this.state.lp2BG}>
          <Projectcard2
            projectnumber="Project 2:"
            projectnameclass={this.state.projectname}
            projectdescclass={this.state.projectdesc}
            projectdesc="Blookify is a fullstack MERN application that gives users the ability to keep track of books theyre reading or currently reading by utilizing the google books api users have access to over 7 million books to add to their collection."
            headerclass1={this.state.projectnumber}
            githublink="https://github.com/isamazon/Blookify"
            livelink="https://blookify.com/"
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

        {/* Project 3 */}

        <Container fluid className={this.state.lp2BG}>
          <Projectcard
            projectnumber="Project 3:"
            projectnameclass={this.state.projectname}
            projectdescclass={this.state.projectdesc}
            projectdesc="Crypto tracker is a app utilizing coin geckos api to list 100s of avalaible crypto currencies and presenting current prices, 24 hour changes, market caps plus more. This project in particular taught me how to ustilize 3rd party apis in my projects"
            headerclass1={this.state.projectnumber}
            githublink="https://github.com/isamazon/Cryptotracker"
            livelink="https://isamazon.github.io/Cryptotracker/"
            projectname="Crypto Tracker"
            svg={this.state.projimg3}
            btn1={this.state.btn}
            img1={react}
            img2={css}
            img3={sass}
            img4={bootstrap}
          />
        </Container>

        <Container fluid className={this.state.lp2BG}>
          <Projectcard2
            projectnumber="Project 4:"
            projectnameclass={this.state.projectname}
            projectdescclass={this.state.projectdesc}
            projectdesc="Shounen fit is another in development MERN application, it is built with the purpose to inspire all anime fans to get in shape by doing exercises that their favorite anime characters would do. This app uses React to its full potential by utilizing reacts ability to reuse components and to change and make each of those components completely unique while being able to use less code and creating a cleaner code enviroment"
            headerclass1={this.state.projectnumber}
            githublink="https://github.com/isamazon/ShounenFit"
            livelink="https://shounenfit.com/"
            projectname="Shounen Fit"
            svg={this.state.projimg1}
            btn1={this.state.btn}
            img1={react}
            img2={css}
            img3={sass}
            img5={node}
            img6={mongoDB}
          />
        </Container>

        {/* Project 5 */}

        <Container fluid className={this.state.lp2BG}>
          <Projectcard
            projectnumber="Project 5:"
            projectnameclass={this.state.projectname}
            projectdescclass={this.state.projectdesc}
            projectdesc="The last project is my person portfolio which is what youre seeing now, this project was made with react "
            headerclass1={this.state.projectnumber}
            livelink="https://isamaz.com/"
            githublink=""
            projectname="Personal portfolio"
            svg={this.state.projimg5}
            btn1={this.state.btn}
            img1={react}
            img2={css}
            img3={sass}
            img4={bootstrap}
          />
        </Container>

        {/* </FullPage> */}
      </div>
    );
  }
}

export default Landing;
