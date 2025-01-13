import React from 'react';
import logo from '../resources/wingman-logo.png';

const NavBar = () => {
  return (
<nav className="navbar navbar-dark">
  <div className="navbar-logo">
    <img src={logo} alt="Logo" />
    <span>WINGMAN | Apex Legends</span>
  </div>
  <ul className="navbar-links">
    <li>
      <a href="/">Home</a>
    </li>

  </ul>
  <a href="https://discord.gg/zMMyrQz89d" className="navbar-button">Discord Support Server</a>
</nav>

  );
};

export default NavBar;