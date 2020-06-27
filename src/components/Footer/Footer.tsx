import React from 'react';

import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a
          href="#"
          className="linkedin"
          rel="noopener noreferrer"
          target="_blank"
        >
          LINKEDIN
        </a>
        <a
          href="#"
          className="instagram"
          rel="noopener noreferrer"
          target="_blank"
        >
          INSTAGRAM
        </a>
        <a href="#" className="cv" rel="noopener noreferrer" target="_blank">
          CV
        </a>
      </div>
      <p className="footer-text">
        Created by{" "}
        <a
          href="https://www.suzynakayama.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Suzy Nakayama
        </a>
      </p>
    </footer>
  );
};

export default Footer
