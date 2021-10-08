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

function PortfolioImg() {
  return (
    <div className="portfolio-img-container">
      <img src={Cube} alt="" className="cube-img" />
      <img src={ReactImg} alt="" className="react-img" />
      <img src={Bootstraplogo} className="bootstrap-img" alt="" />
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

export default PortfolioImg;
