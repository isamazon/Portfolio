import React, { useState } from 'react';
import './sidemenu.css';
import styled from 'styled-components';
import { BsFillInfoCircleFill } from 'react-icons/bs';
function SideMenu() {
  const [buttonMenu, setButtonMenu] = useState('menu-container hidden');
  const [buttonStyle, setButtonStyle] = useState('menu-button');
  const [menuItemContainer, setMenuItemContainer] = useState(false);
  const [menuItems, setMenuItems] = useState('menu-item');
  const [menuItemLink, setMenuItemLink] = useState('menu-item-link');
  const revealMenuButton = () => {
    if (window.scrollY >= 900 && window.scrollY < 1900) {
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
  const ToggleMenuItems = () => {
    setMenuItemContainer(!menuItemContainer);
  };

  window.addEventListener('scroll', revealMenuButton);
  return (
    <div className={buttonMenu}>
      <div
        className={
          menuItemContainer ? 'menu-item-container' : 'menu-item-hidden'
        }
        onMouseLeave={ToggleMenuItems}
      >
        <div className={menuItems}>
          <a href="" className={menuItemLink}>
            Github
          </a>
        </div>
        <div className={menuItems}>
          <a href="" className={menuItemLink}>
            LinkedIn
          </a>
        </div>
        <div className={menuItems}>
          <a href="" className={menuItemLink}>
            Resume
          </a>
        </div>
        <div className={menuItems}>
          <a href="" className={menuItemLink}>
            Email Me
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
