import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="header">
      <div className="nameHolder">
        <h1>Luis Gabriel Chaves Câmara</h1>
        <h4>Software Developer | DevOps</h4>
      </div>
      <div className="btnToNavigation">
        <a href="#profile">
          <FontAwesomeIcon icon={faChevronCircleDown} size="8x" color="#cccccc" />
        </a>
      </div>
    </div>
  );
}

export default Header;