import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particles from "react-particles-js";
// BG
// SVGs
import shounenfitsvgdark from "../assets/shounenfitsvgdark.svg";
import shounenfitsvglight from "../assets/shounenfitsvglight.svg";
import humblenutritionL from "../assets/humblenutrition.svg";
import humblenutritionD from "../assets/humblenutrition2.svg";
import portfolioD from "../assets/portfolioD.svg";
class Projectcard extends Component {
  render() {
    return (
      <Container id="about" fluid className="projects-cnt">
        <Particles className="particles-1" />
        <h1>Projects</h1>
        <Row className="row-1">
          <Col className={this.props.col1} xl={4} lg={6} xs={12}>
            <div className="inner-card">
              <div className="project-img">
                <img src={this.props.svg1} className="svg" alt="" />
              </div>
              <h1 className="project-h1">Shounen Fit</h1>
              <p className="project-p">
                Shounen fit is a in progress fullstack project utilizing
                (React.js, SCSS, MongoDB, Express and Node.js) Right now the
                project is in its very early stages of development with only the
                front end being built right now.
              </p>
              <div className="buttons-container">
                <a
                  href="https://github.com/isamazon/ShounenFit"
                  className="repo-1"
                >
                  Github repo
                </a>
                <a href="http://shounenfit.com/" className="repo-1">
                  Live demo
                </a>
              </div>
            </div>
          </Col>
          <Col className={this.props.col1} xl={4} lg={6} xs={12}>
            <div className="inner-card">
              <div className="project-img">
                <img src={this.props.svg2} className="svg" alt="" />
              </div>
              <h1 className="project-h1">Humble nutrition</h1>
              <p className="project-p">
                Humblenutritionnm.com is a website i built and maintain for the
                company located in albuquerque new mexico Humble nutrition, It
                is a front end site utilizing modern styling techniques equipped
                with all of the necessary technologies to make it responsive on
                all platforms, The website utilizes said technologies such as
                HTML5, CSS, SCSS, Bootstrap 5 and PHP
              </p>
              <div className="buttons-container">
                <a
                  href="https://github.com/isamazon/Humble-Nutrtion"
                  className="repo-1"
                >
                  Github repo
                </a>
                <a href="https://humblenutritionnm.com/" className="repo-1">
                  Live demo
                </a>
              </div>
            </div>
          </Col>
          <Col className={this.props.col1} xl={4} lg={6} xs={12}>
            <div className="inner-card">
              <div className="project-img">
                <img src={this.props.svg3} className="svg" alt="" />
              </div>
              <h1 className="project-h1">Portfolio</h1>
              <p className="project-p">
                This project is the one youre currently viewing. It is built
                with React.js utilizing reacts state managament and reacts
                ability to use components and make them reusable with the power
                of props and state.
              </p>
              <div className="buttons-container">
                <a
                  href="https://github.com/isamazon/Portfolio"
                  className="repo-1"
                >
                  Github repo
                </a>
                <a
                  href="https://github.com/isamazon/ShounenFit"
                  className="repo-1"
                >
                  Live demo
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Projectcard;
