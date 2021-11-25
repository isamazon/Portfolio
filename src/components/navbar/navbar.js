import React, { useState, useRef } from 'react';
// CSS
import './navbar.css';
// Dependencies
import { Link } from 'react-scroll';
// pictures
import Logo1 from '../../assets/logo.png';
import Logo2 from '../../assets/blookifylogo.png';
import Logo3 from '../../assets/aheslogo.png';
import Logo4 from '../../assets/humblelogo.png';
function Navbar(props) {
  const [project, setProject] = useState('nav-bar-container');
  const [links, setLinks] = useState('links');
  const [logoPic, setLogoPic] = useState(Logo1);
  const ToggleProject1 = () => {
    setProject('nav-bar-container blookify');
    setLinks('links blookifylinks');
    setLogoPic(Logo2);
  };
  const ToggleProject2 = () => {
    setProject('nav-bar-container ahes');
    setLinks('links aheslinks');
    setLogoPic(Logo3);
  };
  const ToggleProject3 = () => {
    setProject('nav-bar-container humble');
    setLinks('links humblelinks');
    setLogoPic(Logo4);
  };

  // Scroll
  const scrollProject1 = () => {
    if (window.scrollY >= 900 && window.scrollY < 1900) {
      setProject('nav-bar-container blookify');
      setLinks('links blookifylinks');
      setLogoPic(Logo2);
    } else if (window.scrollY >= 1900 && window.scrollY < 3000) {
      setProject('nav-bar-container ahes');
      setLinks('links aheslinks');
      setLogoPic(Logo3);
    } else if (window.scrollY >= 3000 && window.scrollY < 4000) {
      setProject('nav-bar-container humble');
      setLinks('links humblelinks');
      setLogoPic(Logo4);
    } else {
      setProject('nav-bar-container');
      setLinks('links');
      setLogoPic(Logo1);
    }
  };
  const scrollProject2 = () => {
    if (window.scrollY >= 800 && window.scrollY < 1800) {
      setProject('nav-bar-container blookify');
      setLinks('links blookifylinks');
      setLogoPic(Logo2);
    } else if (window.scrollY >= 1800 && window.scrollY < 3100) {
      setProject('nav-bar-container ahes');
      setLinks('links aheslinks');
      setLogoPic(Logo3);
    } else if (window.scrollY >= 3100) {
      setProject('nav-bar-container humble');
      setLinks('links humblelinks');
      setLogoPic(Logo4);
    } else {
      setProject('nav-bar-container');
      setLinks('links');
      setLogoPic(Logo1);
    }
  };

  const scroll = () => {
    if (window.innerWidth > 1300) {
      scrollProject1();
    } else if (window.innerWidth < 1000) {
      scrollProject2();
    }
  };

  window.addEventListener('scroll', scroll);
  return (
    <div className={project}>
      <div className="nav-bar-icon">
        <Link
          className="logo-container"
          name={props.toproject0}
          spy={true}
          smooth={true}
        >
          <img src={logoPic} className="logo" alt="" />
        </Link>
      </div>
      <div className="nav-bar-items">
        <Link
          className={links}
          to={props.toproject1}
          onClick={ToggleProject1}
          spy={true}
          smooth={true}
        >
          Project 1
        </Link>
        <Link
          className={links}
          to={props.toproject2}
          onClick={ToggleProject2}
          spy={true}
          smooth={true}
        >
          Project 2
        </Link>
        <Link
          className={links}
          to={props.toproject3}
          onClick={ToggleProject3}
          spy={true}
          smooth={true}
        >
          Project 3
        </Link>
        <Link className={links} to={props.tocontact} spy={true} smooth={true}>
          contact me
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
