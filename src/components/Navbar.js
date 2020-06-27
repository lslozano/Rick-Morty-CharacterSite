import React from 'react';
import '../styles/navbar.css';
import '../styles/navlinks.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/" className="link">
        <h3>Rick and Morty</h3>
      </Link>
      <ul className="nav-links">
        <Link to="/about" className="link">
          <li>About</li>
        </Link>
        <Link to="/characters" className="link">
          <li>Characters</li>
        </Link>
        <Link to="/characters" className="link">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;