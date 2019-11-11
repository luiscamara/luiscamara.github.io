import React from 'react';

import './index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className="footer">
      <h2>Contact</h2>
      <hr />
      <div className="contacts">
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/luiscamara/">
            <div className="icon">
              <FontAwesomeIcon icon={faLinkedinIn} color="#282a36" />
            </div>
            <p>https://www.linkedin.com/in/luiscamara/</p>
          </a>
        </div>
        <div className="email">
          <a href="mailto:lgccamara@gmail.com">
            <div className="icon">
              <FontAwesomeIcon icon={faAt} color="#282a36" />
            </div>
            <p>lgccamara@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;