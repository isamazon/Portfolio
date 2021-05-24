import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particles from "react-particles-js";
import "../CSS/project.css";
// BG
// SVGs

class Projectcard2 extends Component {
  render() {
    return (
      <Container id="about" fluid className="projects-fld-cnt">
        <Particles className="particles-1" />
        <Row className="row-1">
          <Col lg={7} md={12} xs={12} className="col-2">
            {this.props.svg}
            <img src={this.props.png} className="png" alt="" />
          </Col>
          <Col lg={5} md={12} xs={12} className="col-1">
            <div className="project-info">
              <h1 className={this.props.headerclass1}>
                {this.props.projectnumber}
              </h1>
              <h1 className={this.props.projectnameclass}>
                {this.props.projectname}
              </h1>
              <p className={this.props.projectdescclass}>
                {this.props.projectdesc}
              </p>
              <div className="btn-cnt">
                <a className={this.props.btn1} href={this.props.githublink}>
                  Github
                </a>
                <a className={this.props.btn1} href={this.props.livelink}>
                  live demo
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Projectcard2;
