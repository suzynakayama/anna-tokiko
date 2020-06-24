import React from 'react'
import { Link } from 'react-router-dom'

const NavBar: React.FC = () => {
  return <nav className="nav">
    {/* Logo */}
    <div className="nav-links">
      <Link to="#projects" className="link-project">Projects</Link>
      <Link to="/contact" className="link-contact">Contact Me</Link>
    </div>
  </nav>;
};

export default NavBar
