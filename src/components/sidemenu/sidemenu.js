import React, { useState } from 'react';
import './sidemenu.css';
import styled from 'styled-components';
import Resume from '../../assets/resume.pdf';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin, FaRegFileAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
function SideMenu() {
  const [buttonMenu, setButtonMenu] = useState('menu-container hidden');
  const [buttonStyle, setButtonStyle] = useState('menu-button');
  const [menuItemContainer, setMenuItemContainer] = useState(false);
  const [menuItems, setMenuItems] = useState('menu-item');
  const [menuItemLink, setMenuItemLink] = useState('menu-item-link');

  const revealMenuButton = () => {
    if (window.scrollY >= 500 && window.scrollY < 1900) {
      setButtonMenu('menu-container');
      setButtonStyle('menu-button blookifyButton');
      setMenuItems('menu-item blookifyButton');
      setMenuItemLink('menu-item-link blookifyLink');
    } else if (window.scrollY >= 1900 && window.scrollY < 3000) {
      setButtonStyle('menu-button ahesButton');
      setMenuItemLink('menu-item-link ahesLink');
    } else if (window.scrollY >= 3000 && window.scrollY < 4500) {
      setButtonStyle('menu-button humbleButton');
      setMenuItemLink('menu-item-link humbleLink');
    } else {
      setButtonMenu('menu-container hidden');
    }
  };
  const revealMenuButtonSmall = () => {
    if (window.scrollY >= 0 && window.scrollY < 600) {
      setButtonMenu('menu-container');
      setButtonStyle('menu-button portfolioButton');
      setMenuItems('menu-item portfolioButton');
      setMenuItemLink('menu-item-link portfolioLink');
    } else if (window.scrollY >= 600 && window.scrollY < 1800) {
      setButtonMenu('menu-container');
      setButtonStyle('menu-button blookifyButton');
      setMenuItems('menu-item blookifyButton');
      setMenuItemLink('menu-item-link blookifyLink');
    } else if (window.scrollY >= 1800 && window.scrollY < 3100) {
      setButtonStyle('menu-button ahesButton');
      setMenuItemLink('menu-item-link ahesLink');
    } else if (window.scrollY >= 3100) {
      setButtonStyle('menu-button humbleButton');
      setMenuItemLink('menu-item-link humbleLink');
    } else {
    }
  };
  const ToggleMenuItems = () => {
    setMenuItemContainer(!menuItemContainer);
  };

  const scroll = () => {
    if (window.innerWidth > 1200) {
      revealMenuButton();
    } else if (window.innerWidth < 1200) {
      revealMenuButtonSmall();
    }
  };
  window.addEventListener('scroll', scroll);
  return (
    <div className={buttonMenu}>
      <div
        className={
          menuItemContainer ? 'menu-item-container' : 'menu-item-hidden'
        }
        onMouseLeave={ToggleMenuItems}
      >
        <div className={menuItems}>
          <a href="https://github.com/isamazon" className={menuItemLink}>
            <FaGithub className="menu-icon" /> Github
          </a>
        </div>
        <div className={menuItems}>
          <a
            href="https://www.linkedin.com/in/isaiah-mazon-1786b8206/"
            className={menuItemLink}
          >
            <FaLinkedin className="menu-icon" /> LinkedIn
          </a>
        </div>
        <div className={menuItems}>
          <a href={Resume} className={menuItemLink} download>
            <FaRegFileAlt className="menu-icon" /> Resume
          </a>
        </div>
        <div className={menuItems}>
          <a href="" className={menuItemLink}>
            <FiMail className="menu-icon" /> Email Me
          </a>
        </div>
      </div>
      <div className={buttonStyle} onClick={ToggleMenuItems}>
        <BsFillInfoCircleFill className="info-button" />
      </div>
    </div>
  );
}

export default SideMenu;
