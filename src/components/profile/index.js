import React from 'react';
import './index.css';

import Introduction from '../introduction';
import Education from '../education';
import Experience from '../experience';
import Abilities from '../abilities';
import Projects from '../projects';

function Profile() {
  return (
    <div>
      <Introduction />
      <Education />
      <Experience />
      <Abilities />
      <Projects />      
    </div>
  );
}

export default Profile;