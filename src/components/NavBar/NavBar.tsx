import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar: React.FC = () => {
  return <nav className="nav">
    <img src="/images/at1.png" alt="Anna Tokiko Logo" className="nav-logo"/>
    <div className="nav-links">
      <Link to="#projects" className="link-project">Projects</Link>
      <Link to="/contact" className="link-contact">Contact</Link>
    </div>
  </nav>;
};

export default NavBar
