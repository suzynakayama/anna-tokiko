import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';
import CurrentUserContext from '../../contexts/currentUser';

const NavBar: React.FC = () => {
  const currentUser = useContext(CurrentUserContext);

  const handleLogout = async (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    try {
      await fetch("/api/anna-tokiko-login/logout");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="nav">
      <img src="/images/at1.png" alt="Anna Tokiko Logo" className="nav-logo" />
      {currentUser &&
        <NavLink to="/annatokiko-login/new">Add Project</NavLink> && 
        <NavLink onClick={handleLogout} to="/">Logout</NavLink>
      }
      <div className="nav-links">
        <NavLink to="#projects" className="link-project">
          Projects
        </NavLink>
        <NavLink to="/contact" className="link-contact">
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar
