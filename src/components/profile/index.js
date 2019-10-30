import React from 'react';
import './index.css';

import { Image } from 'react';
import photo from '../../assets/profile_photo.jpg';

function Profile() {
  return (
    <div id="profile" className="profile">
      <div className="title">
        <h1>Profile</h1>
        <h3>I'm a Software Developer and also a technology enthusiast</h3>
        <hr/>
      </div>
      <div className="bio">
        <div className="about">
          <h2>About me</h2>
          <p>I am a Software Developer / DevOps Engineer with over 11 years of experience developing and mantaining web applications and standalone applications. I am used to work in large companies, dealing with complex problems and many stakeholders. I am a innovative and self-starter professional with proven ability to leverage multiple technologies, always assuring high standards and meeting deadlines. </p>
        </div>
        <div className="photo">
          <div className="photoBackground">
            <img src={photo} alt="Luis Câmara"/>
          </div>
        </div>
        <div className="details">
          <h2>Details</h2>
          <p>
            <strong>Name:</strong>
          </p>
          <p>
            Luis Gabriel Chaves Câmara
          </p>
          <p>
            <strong>Age:</strong>
          </p>
          <p>
            35 years
          </p>
          <p>
            <strong>Location:</strong>
          </p>
          <p>
            Salvador, Bahia, Brazil
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;