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
              <h1>{this.props.projectnumber}</h1>
              <h1>{this.props.projectname}</h1>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Projectcard2;
