import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          UMT
        </Link>
        <div className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/programs" className="nav-link">Programs</Link>
          <Link to="/admission" className="nav-link">Admission</Link>
          <Link to="/faculty" className="nav-link">Faculty</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
