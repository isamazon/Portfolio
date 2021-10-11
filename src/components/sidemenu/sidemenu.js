import React, { useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
// CSS
import './sidemenu.css';
function SideMenu() {
  const [sideMenu, setSideMenu] = useState(false);
  return (
    <div className="side-menu-container">
      <div className="side-menu-closed">
        <div className="arrow-container">
          <div className="arrow">
            <FaAngleLeft className="arrow-icon one" />

            <FaAngleLeft className="arrow-icon two" />

            <FaAngleLeft className="arrow-icon three" />
          </div>
        </div>
        <p className="linksp">L</p>
        <p className="linksp">I</p>
        <p className="linksp">N</p>
        <p className="linksp">K</p>
        <p className="linksp">S</p>
        <div className="arrow-container">
          <div className="arrow">
            <FaAngleLeft className="arrow-icon one" />

            <FaAngleLeft className="arrow-icon two" />

            <FaAngleLeft className="arrow-icon three" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
