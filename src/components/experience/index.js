import React from 'react';
import './index.css';

import JobExperience from './jobexperience';
import JobRole from './jobexperience/role';

function Experience() {
  return (
    <div className="experience">
      <h2>Experiences</h2>
      <hr />
      <ul className="list">
        <JobExperience 
          company="Petrobras"
          period="Oct/2014 - present"
          location="Salvador, Bahia, Brazil"
          title="Software Developer | DevOps Engineer">
            <JobRole 
              description="Suggested and developed a Spring Boot Web 
              Application, with Java on the backend and Javascript on the 
              frontend, to manage and grant continuous deployment to Geographic 
              Information Systems (GIS) and related web applications, increasing 
              efficiency of business processes and improving overall IT support 
              ticket’s resolution time."
            />
        </JobExperience>
      </ul>
    </div>
  );
}

export default Experience;