import React from 'react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';
import bell from '../assets/bell.png';
import './Topbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import menuIcon from '../assets/menuIcon.png'



const Topbar = () => {
  const handleUserClick = () => {
    console.log("User profile clicked!");
  };

  return (
    <header className="topbar">
      <div className="topbar-left">
        <img src={logo} alt="Sri Chaitanya Educational Institutions Logo" className="logo"/>
         <div className="search-wrapper">
          <FontAwesomeIcon icon={faSearch} className="search-icon" /> 
          <input
            type="text"
            placeholder="Ask for anything"
            className="search-bar"
          />
        </div>
      </div>

      <div className="topbar-right">
        <button className="notification-button">
          <img src={bell} alt="Bell Icon" className="bell-icon" /> 
        </button>
        <div className="user-section" onClick={handleUserClick}>
          <img src="user.png" alt="User Avatar" className="user-image"/>
          <div className="user-info">
            <div className="user-name">HYD 256789</div>
            <div className="user-role">Cashier</div>
          </div>
          <span className="dropdown-arrow"><FontAwesomeIcon icon={faAngleDown} /> </span>
        </div>
      </div>
       <div className="menu-icon">
    <img src={menuIcon} alt="Menu" className="hamburger-image" />
  </div>
    </header>
  );
};

export default Topbar;
