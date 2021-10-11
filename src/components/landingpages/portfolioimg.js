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
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import Blocklayout from '../../assets/Blocklayout.png';
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
        <Slide bottom>
          <img src={Blocklayout} alt="" className="block-img" />
        </Slide>
        <img src={Cube} alt="" className="cube-img" />
        <div className="react-img">
          <img
            src={ReactImg}
            alt=""
            className="img "
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
            className="img bootstrapimg"
            onMouseEnter={() => this.setState({ p2: 'Bootstrap', show: true })}
            onMouseLeave={() => this.setState({ p2: ' ', show: false })}
          />
          <Zoom opposite cascade when={this.state.show}>
            <p className="text-img">{this.state.p2}</p>
          </Zoom>
        </div>
        <div className="css-img ">
          <img
            src={csslogo}
            alt=""
            className="img "
            onMouseEnter={() => this.setState({ p3: 'CSS3', show: true })}
            onMouseLeave={() => this.setState({ p3: ' ', show: false })}
          />
          <Zoom opposite cascade when={this.state.show}>
            <p className="text-img2">{this.state.p3}</p>
          </Zoom>
        </div>
        <div className="sass-img">
          <img
            src={sass}
            alt=""
            className="img "
            onMouseEnter={() => this.setState({ p4: 'SASS/SCSS', show: true })}
            onMouseLeave={() => this.setState({ p4: ' ', show: false })}
          />
          <Zoom opposite cascade when={this.state.show}>
            <p className="text-img2">{this.state.p4}</p>
          </Zoom>
        </div>
        <div className="html-img">
          <img
            src={htmllogo}
            alt=""
            className="img "
            onMouseEnter={() => this.setState({ p5: 'HTML5', show: true })}
            onMouseLeave={() => this.setState({ p5: ' ', show: false })}
          />
          <Zoom opposite cascade when={this.state.show}>
            <p className="text-img2">{this.state.p5}</p>
          </Zoom>
        </div>
        <div className="express-img">
          <img
            src={express}
            alt=""
            className="img "
            onMouseEnter={() => this.setState({ p6: 'Express', show: true })}
            onMouseLeave={() => this.setState({ p6: ' ', show: false })}
          />
          <Zoom opposite cascade when={this.state.show}>
            <p className="text-img2">{this.state.p6}</p>
          </Zoom>
        </div>
        <div className="redux-img">
          <img
            src={reduximg}
            alt=""
            className="img "
            onMouseEnter={() => this.setState({ p7: 'Redux', show: true })}
            onMouseLeave={() => this.setState({ p7: ' ', show: false })}
          />
          <Zoom opposite cascade when={this.state.show}>
            <p className="text-img2">{this.state.p7}</p>
          </Zoom>
        </div>
        <div className="node-img ">
          <img
            src={node}
            alt=""
            className="img "
            onMouseEnter={() => this.setState({ p8: 'Node.js', show: true })}
            onMouseLeave={() => this.setState({ p8: ' ', show: false })}
          />
          <Zoom opposite cascade when={this.state.show}>
            <p className="text-img2">{this.state.p8}</p>
          </Zoom>
        </div>
        <div className="js-img">
          <img
            src={javascript}
            alt=""
            className="img"
            onMouseEnter={() => this.setState({ p9: 'Javascript', show: true })}
            onMouseLeave={() => this.setState({ p9: ' ', show: false })}
          />
          <Zoom opposite cascade when={this.state.show}>
            <p className="text-img2">{this.state.p9}</p>
          </Zoom>
        </div>
        <div className="mongo-img">
          <img
            src={mongodb}
            alt=""
            className="img "
            onMouseEnter={() => this.setState({ p10: 'MongoDB', show: true })}
            onMouseLeave={() => this.setState({ p10: ' ', show: false })}
          />
          <Zoom opposite cascade when={this.state.show}>
            <p className="text-img3">{this.state.p10}</p>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default PortfolioImg;
