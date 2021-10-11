import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaRegFileAlt } from 'react-icons/fa';
import { SiIndeed } from 'react-icons/si';
// CSS
import './sidemenu.css';
import Zoom from 'react-reveal/Zoom';
function SideMenu(props) {
  const [sideMenu, setSideMenu] = useState(false);
  const ToggleMenu = () => {
    console.log('works?');
    setSideMenu(!sideMenu);
  };
  const [linkP, setLinkP] = useState(false);
  const ToggleLinkP1 = () => {
    setLinkP(!linkP);
  };
  const [linkP2, setLinkP2] = useState(false);
  const ToggleLinkP2 = () => {
    setLinkP2(!linkP2);
  };
  const [linkP3, setLinkP3] = useState(false);
  const ToggleLinkP3 = () => {
    setLinkP3(!linkP3);
  };
  const [linkP4, setLinkP4] = useState(false);
  const ToggleLinkP4 = () => {
    setLinkP4(!linkP4);
  };

  return (
    <div className="side-menu-container">
      {sideMenu ? (
        <div className="side-menu-opened">
          <div className="arrow-container">
            <div className="arrow" onClick={ToggleMenu}>
              <FaAngleRight
                className="arrow-icon one"
                color={props.iconcolor}
              />

              <FaAngleRight
                className="arrow-icon two"
                color={props.iconcolor}
              />

              <FaAngleRight
                className="arrow-icon three"
                color={props.iconcolor}
              />
            </div>
          </div>
          <a
            href=""
            className="icon-links"
            onMouseEnter={ToggleLinkP1}
            onMouseLeave={ToggleLinkP1}
          >
            <FaGithub className="icons" color={props.iconcolor} />
            <Zoom opposite cascade when={linkP}>
              <p className="link-p " style={props.linkpcolor}>
                {linkP ? 'Github' : null}
              </p>
            </Zoom>
          </a>
          {/* LinkedIn */}
          <a
            href=""
            className="icon-links"
            onMouseEnter={ToggleLinkP2}
            onMouseLeave={ToggleLinkP2}
          >
            <FaLinkedin className="icons" color={props.iconcolor} />
            <Zoom opposite cascade when={linkP2}>
              <p className="link-p " style={props.linkpcolor}>
                {linkP2 ? 'LinkedIn' : null}
              </p>
            </Zoom>
          </a>
          {/* Indeed */}
          <a
            href=""
            className="icon-links"
            onMouseEnter={ToggleLinkP3}
            onMouseLeave={ToggleLinkP3}
          >
            <SiIndeed className="icons" color={props.iconcolor} />
            <Zoom opposite cascade when={linkP3}>
              <p className="link-p " style={props.linkpcolor}>
                {linkP3 ? 'Indeed' : null}
              </p>
            </Zoom>
          </a>
          <a
            href=""
            className="icon-links"
            onMouseEnter={ToggleLinkP4}
            onMouseLeave={ToggleLinkP4}
          >
            <FaRegFileAlt className="icons" color={props.iconcolor} />
            <Zoom opposite cascade when={linkP4}>
              <p className="link-p " style={props.linkpcolor}>
                {linkP4 ? 'Resume' : null}
              </p>
            </Zoom>
          </a>
          {/* Arrow container */}
          <div className="arrow-container">
            <div className="arrow" onClick={ToggleMenu}>
              <FaAngleRight
                className="arrow-icon one"
                color={props.iconcolor}
              />
              <FaAngleRight
                className="arrow-icon two"
                color={props.iconcolor}
              />
              <FaAngleRight
                className="arrow-icon three"
                color={props.iconcolor}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="side-menu-closed" onClick={ToggleMenu}>
          <div className="arrow-container arrowcnt1">
            <div className="arrow">
              <FaAngleLeft className="arrow-icon one" color={props.iconcolor} />
              <FaAngleLeft className="arrow-icon two" color={props.iconcolor} />
              <FaAngleLeft
                className="arrow-icon three"
                color={props.iconcolor}
              />
            </div>
          </div>
          <p className="linksp" style={props.linkcolor}>
            Important links
          </p>
          <div className="arrow-container arrowcnt2">
            <div className="arrow">
              <FaAngleLeft className="arrow-icon one" color={props.iconcolor} />

              <FaAngleLeft className="arrow-icon two" color={props.iconcolor} />

              <FaAngleLeft
                className="arrow-icon three"
                color={props.iconcolor}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideMenu;
