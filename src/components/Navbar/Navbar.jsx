import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            MOVIE-LIB <i className="fab fa-typo3" />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
