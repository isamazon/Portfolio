import React from 'react';
import { Col } from 'react-bootstrap';

// CSS
import './ahes.css';
// Components
import Youtube from '../../youtube';
// Icons
import { FaGithub, FaGlobe, FaReact, FaNodeJs } from 'react-icons/fa';

import { SiExpress, SiSass, SiSqlite } from 'react-icons/si';
// Sound
import Sound1 from '../../../assets/clicksfx.mp3';
class Ahes extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      intitalP: 'Click above for project info :)',
      intialPclass: 'text-content-container',
    };
    this.handleHover = this.handleHover.bind(this);
    this.handleHover2 = this.handleHover2.bind(this);
    this.handleHover3 = this.handleHover3.bind(this);
    this.handleHover4 = this.handleHover4.bind(this);
    this.handleHover5 = this.handleHover5.bind(this);
    //   Paragraph
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
    this.handleClick5 = this.handleClick5.bind(this);
  }
  // Audio
  playAudio = () => {
    new Audio(Sound1).play();
  };
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
  handleHover5() {
    this.setState({ show5: !this.state.show5 });
  }
  //
  handleClick() {
    this.playAudio();
    this.setState({
      intitalP: 'American house hold estate sales is a fullstack application',
      intialPclass: 'text-content-container',
    });
  }
  handleClick2() {
    this.playAudio();
    this.setState({
      intitalP:
        'American house hold estate sales is a fullstack application built for a client needing to display his upcoming sale information and items to his customers.',
      intialPclass: 'text-content-container',
    });
  }
  handleClick3() {
    this.playAudio();
    this.setState({
      intitalP:
        'American house hold estate sales is a fullstack application built for a client needing to display his upcoming sale information and items to his customers. This is done by allowing the client to add and delete and change the description and pictures of the upcoming sale on a whim utilizing base64 for the photos.',
      intialPclass: 'text-content-container',
    });
  }
  handleClick4() {
    this.playAudio();
    this.setState({
      intitalP:
        'American house hold estate sales is a fullstack application built for a client needing to display his upcoming sale information and items to his customers. This is done by allowing the client to add and delete and change the description and pictures of the upcoming sale on a whim utilizing base64 for the photos.',
      intialPclass: 'text-content-container-long',
    });
  }
  handleClick5() {
    this.playAudio();
    this.setState({
      intitalP:
        'American house hold estate sales is a fullstack application built for a client needing to display his upcoming sale information and items to his customers. This is done by allowing the client to add and delete and change the description and pictures of the upcoming sale on a whim utilizing base64 for the photos. The tech im using with this project is Node.js and express for the backend sqlite3 for the DB and React for the front end. This project was my first experience building a fully functional CRUD application for a client.',
      intialPclass: 'text-content-container-long',
    });
  }
  render() {
    return (
      <div className="ahes-page-cont">
        <Col xl={6} md={12} className="info-container">
          <Youtube urlplayer="https://youtu.be/8827OSG1XoI" />
          <a className="link-container" href="https://github.com/isamazon">
            <FaGithub className="link-icon" />
            Gitub
          </a>
          <a
            className="link-container"
            href="https://www.americanhouseholdestatesales.com/"
          >
            <FaGlobe className="link-icon" />
            Live demo
          </a>
          <h1 className="project-title">Client work:</h1>
        </Col>
        <Col xl={7} md={12} className="right-col">
          <h1 className="project-name">A.H.E.S</h1>

          <div className="tech-used-container">
            <h1>Tech used</h1>
            <div className="tech">
              <SiSqlite className="tech-icon" />
              <SiExpress className="tech-icon" />
              <FaReact className="tech-icon" />

              <FaNodeJs className="tech-icon" />
              <SiSass className="tech-icon" />
            </div>
          </div>

          <div className="adjust-container">
            <p>Adjust info length:</p>
            <div className="button-cnt">
              <label
                htmlFor="button"
                className="radio"
                onClick={this.handleClick}
              >
                <input type="radio" name="button" className="button" />
                <div className="radio__radio"></div>
              </label>
              <label
                htmlFor="button"
                className="radio"
                onClick={this.handleClick2}
              >
                <input type="radio" name="button" className="button" />
                <div className="radio__radio"></div>
              </label>
              <label
                htmlFor="button"
                className="radio"
                onClick={this.handleClick3}
              >
                <input type="radio" name="button" className="button" />
                <div className="radio__radio"></div>
              </label>
              <label
                htmlFor="button"
                className="radio"
                onClick={this.handleClick4}
              >
                <input type="radio" name="button" className="button" />
                <div className="radio__radio"></div>
              </label>
              <label
                htmlFor="button"
                className="radio"
                onClick={this.handleClick5}
              >
                <input type="radio" name="button" className="button" />
                <div className="radio__radio"></div>
              </label>
            </div>
            <div className="button-text">
              <p className="shortest">Shortest</p>
              <p className="longest">Longest</p>
            </div>
          </div>

          <p className="ahes-p">{this.state.intitalP}</p>
        </Col>
      </div>
    );
  }
}

export default Ahes;
