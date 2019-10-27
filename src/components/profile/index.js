import React from 'react';
import './index.css';

import { Image } from 'react';

function Profile() {
  return (
    <div id="profile" className="profile">
      <div className="title">
        <h1>Profile</h1>
        <h3>Some description</h3>
        <hr/>
      </div>
      <div className="bio">
        <div className="photo">
        </div>
        <div className="information">
          <div className="details"></div>
          <div className="about"></div>
        </div>        
      </div>
    </div>
  );
}

export default Profile;