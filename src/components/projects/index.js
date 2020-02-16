import React from 'react';
import './index.css';

import Project from './project';
import personalHomepageScreenshot from '../../assets/personalhomepage.jpg';
import roadQualityMonitorScreenshot from '../../assets/roadqualitymonitor.jpg';
import pdfFormFillerScreenshot from '../../assets/pdfformfiller.png';

function Projects() {
  return (
    <div className='projects'>
      <h2>Demo Projects</h2>
      <hr />
      <Project 
        title='Personal Home Page'
        screenshot={personalHomepageScreenshot}
        description='This webpage was built to present myself and also to
        showcase my frontend skills.'
        techs={['Javascript', 'React.js', 'HTML', 'CSS']}
        github='https://github.com/luiscamara/luiscamara.github.io/tree/development'
      />
      <Project 
        title='Road Quality Monitor'
        screenshot={roadQualityMonitorScreenshot}
        description="Developed for a university research, this project leverages
        the power of sensor fusion on Android to capture road quality based on
        readings from devices in user's vehicles."
        techs={['Java', 'Android', 'Spring Boot', 'PostgreSQL', 'GIS']}
        github='https://github.com/luiscamara/done'
      />
      <Project 
        title='Form Filler (VanHackathon)'
        screenshot={pdfFormFillerScreenshot}
        description='This web service was developed for the VanHackathon 
        competition on 2019. The service is used to upload and automatically 
        fill PDF forms by passing fields and their respective values.'
        techs={['Java', 'Spring Boot', 'MongoDB']}
        github='https://github.com/luiscamara/FormFillerWeb'
      />
    </div>
  );
}

export default Projects;