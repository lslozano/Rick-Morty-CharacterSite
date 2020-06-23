import React from 'react';
import '../styles/navbar.css';
import '../styles/links.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/" className="router-link">
        <h3>Rick and Morty</h3>
      </Link>
      <ul className="nav-links">
        <Link to="/about" className="router-link">
          <li>About</li>
        </Link>
        <Link to="/characters" className="router-link">
          <li>Characters</li>
        </Link>
        <Link to="/characters" className="router-link">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;