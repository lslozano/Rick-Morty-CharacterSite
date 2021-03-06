import React from 'react';
import '../../styles/footer.css';

function Footer() {
  return (
    <div id="footer">
      <h3>Site created by Luis Lozano.</h3>
      <p>For any inquiries, please contact me at:</p>
      <a href="https://github.com/lslozano" rel="noopener noreferrer" target="_blank"><i className="fab fa-github-square contact-icon"></i></a>
      <a href="https://www.linkedin.com/in/lslozano/" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin contact-icon"></i></a>
      <a href="https://medium.com/@lslozano" rel="noopener noreferrer" target="_blank"><i className="fab fa-medium contact-icon"></i></a>
      <p className="disclaimer">Disclaimer: Rick and Morty trademark and all it's characters belong to adultswim. <br />
      This is only a site to demostrate the use of certain technologies.
      </p>
    </div>
  )
}

export default Footer