import React from 'react';
import { Link } from 'react-router-dom';
// Links only take one prop.

function Nav() {
  return (
    <nav>
      <Link to="/" className="router-link">
        <h3>Logo</h3>
      </Link>
      <ul className="nav-links">
        <Link to="/about" className="router-link">
          <li>About</li>
        </Link>
        <Link to="/characters" className="router-link">
          <li>Characters</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
