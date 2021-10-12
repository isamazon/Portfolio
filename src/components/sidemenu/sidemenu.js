import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaRegFileAlt } from 'react-icons/fa';
import { SiIndeed } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
// CSS
import './sidemenu.css';
import Zoom from 'react-reveal/Zoom';
function SideMenu(props) {
  const [sideMenu, setSideMenu] = useState(false);
  const ToggleMenu = () => {
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
  const [linkP5, setLinkP5] = useState(false);
  const ToggleLinkP5 = () => {
    setLinkP5(!linkP5);
  };

  return (
    <div className={props.maincontainer}>
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
          <a href="" className="icon-links">
            <FaGithub
              className="icons"
              color={props.iconcolor}
              onMouseEnter={ToggleLinkP1}
              onMouseLeave={ToggleLinkP1}
            />
            <Zoom opposite cascade when={linkP}>
              <p className="link-p one" style={props.linkpcolor}>
                {linkP ? 'Github' : null}
              </p>
            </Zoom>
          </a>
          {/* LinkedIn */}
          <a href="" className="icon-links">
            <FaLinkedin
              className="icons"
              color={props.iconcolor}
              onMouseEnter={ToggleLinkP2}
              onMouseLeave={ToggleLinkP2}
            />
            <Zoom opposite cascade when={linkP2}>
              <p className="link-p two" style={props.linkpcolor}>
                {linkP2 ? 'LinkedIn' : null}
              </p>
            </Zoom>
          </a>
          {/* Indeed */}
          <a href="" className="icon-links">
            <SiIndeed
              className="icons"
              color={props.iconcolor}
              onMouseEnter={ToggleLinkP3}
              onMouseLeave={ToggleLinkP3}
            />
            <Zoom opposite cascade when={linkP3}>
              <p className="link-p three" style={props.linkpcolor}>
                {linkP3 ? 'Indeed' : null}
              </p>
            </Zoom>
          </a>
          <a href="" className="icon-links">
            <FaRegFileAlt
              className="icons"
              color={props.iconcolor}
              onMouseEnter={ToggleLinkP4}
              onMouseLeave={ToggleLinkP4}
            />
            <Zoom opposite cascade when={linkP4}>
              <p className="link-p four" style={props.linkpcolor}>
                {linkP4 ? 'Resume' : null}
              </p>
            </Zoom>
          </a>
          <a href="" className="icon-links">
            <FiMail
              className="icons"
              color={props.iconcolor}
              onMouseEnter={ToggleLinkP5}
              onMouseLeave={ToggleLinkP5}
            />
            <Zoom opposite cascade when={linkP5}>
              <p className="link-p five" style={props.linkpcolor}>
                {linkP5 ? 'Email' : null}
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
          <div className="arrow-container">
            <div className="arrow">
              <FaAngleLeft className="arrow-icon one" color={props.iconcolor} />
              <FaAngleLeft className="arrow-icon two" color={props.iconcolor} />
              <FaAngleLeft
                className="arrow-icon three"
                color={props.iconcolor}
              />
            </div>
          </div>
          <p className={props.linksp} style={props.linkcolor}>
            L
          </p>
          <p className={props.linksp} style={props.linkcolor}>
            I
          </p>
          <p className={props.linksp} style={props.linkcolor}>
            N
          </p>
          <p className={props.linksp} style={props.linkcolor}>
            K
          </p>
          <p className={props.linksp} style={props.linkcolor}>
            S
          </p>
          <div className="arrow-container">
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
