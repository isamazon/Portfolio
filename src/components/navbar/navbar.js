import React, { useState } from 'react';
// CSS
import './navbar.css';
// Dependencies
import { Link } from 'react-scroll';
function Navbar(props) {
  const [project, setProject] = useState('nav-bar-container');
  const [links, setLinks] = useState('links');
  const ToggleProject1 = () => {
    setProject('nav-bar-container blookify');
  };
  const ToggleProject2 = () => {
    setProject('nav-bar-container ahes');
  };
  const ToggleProject3 = () => {
    setProject('nav-bar-container humble');
  };

  // Scroll
  const scrollProject1 = () => {
    if (window.scrollY >= 900 && window.scrollY < 1900) {
      setProject('nav-bar-container blookify');
      setLinks('links blookifylinks');
    } else if (window.scrollY >= 1900 && window.scrollY < 3000) {
      setProject('nav-bar-container ahes');
      setLinks('links aheslinks');
    } else if (window.scrollY >= 3000 && window.scrollY < 4000) {
      setProject('nav-bar-container humble');
      setLinks('links humblelinks');
    } else {
      setProject('nav-bar-container');
      setLinks('links');
    }
  };

  window.addEventListener('scroll', scrollProject1);
  return (
    <div className={project}>
      <div className="nav-bar-icon"></div>
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
