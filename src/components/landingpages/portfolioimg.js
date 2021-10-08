import React from 'react';
import './img.css';
import Cube from '../../assets/cube.png';
import ReactImg from '../../assets/react.png';
import Bootstraplogo from '../../assets/bootstraplogo.png';
import csslogo from '../../assets/csslogo.png';
import express from '../../assets/express.png';
import htmllogo from '../../assets/htmllogo.png';
import reduximg from '../../assets/redux.png';
import javascript from '../../assets/javascript.png';
import mongodb from '../../assets/mongodb.png';
import sass from '../../assets/sass.png';
import node from '../../assets/node.png';
//
import Zoom from 'react-reveal/Zoom';
class PortfolioImg extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      p1: '',
      p2: '',
      p3: '',
      p4: '',
      p5: '',
      p6: '',
      p7: '',
      p8: '',
      p9: '',
      p10: '',
    };
  }

  render() {
    return (
      <div className="portfolio-img-container">
        <img src={Cube} alt="" className="cube-img" />
        <div className="react-img">
          <img
            src={ReactImg}
            alt=""
            className="img"
            onMouseEnter={() => this.setState({ p1: 'React.js', show: true })}
            onMouseLeave={() => this.setState({ p1: ' ', show: false })}
          />
          <Zoom opposite cascade when={this.state.show}>
            <p className="text-img">{this.state.p1}</p>
          </Zoom>
        </div>
        <div className="bootstrap-img">
          <img
            src={Bootstraplogo}
            alt=""
            className="img"
            onMouseEnter={() => this.setState({ p2: 'Bootstrap', show: true })}
            onMouseLeave={() => this.setState({ p2: ' ', show: false })}
          />
          <Zoom opposite cascade when={this.state.show}>
            <p className="text-img">{this.state.p2}</p>
          </Zoom>
        </div>
        <img src={csslogo} alt="" className="css-img" />
        <img src={sass} alt="" className="sass-img" />
        <img src={htmllogo} alt="" className="html-img" />
        <img src={express} alt="" className="express-img" />
        <img src={reduximg} alt="" className="redux-img" />
        <img src={node} alt="" className="node-img" />
        <img src={javascript} alt="" className="js-img" />
        <img src={mongodb} alt="" className="mongo-img" />
      </div>
    );
  }
}

export default PortfolioImg;
