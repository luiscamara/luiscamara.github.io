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
          period="Oct/2014 - Feb/2020"
          location="Salvador, BA, Brazil"
          title="Software Developer | DevOps Engineer">
            <JobRole 
              description="Suggested and developed a Spring Boot Web 
              Application, with Java on the backend and Javascript on the 
              frontend, to manage and grant continuous deployment to Geographic 
              Information Systems (GIS) and related web applications, increasing 
              efficiency of business processes and improving overall IT support 
              ticket’s resolution time."
            />
            <JobRole 
              description="Proposed and developed a Java Spring Boot Web 
              Application with jQuery, HTML and CSS to summarize support tickets 
              from different sources, improving overall priority management and 
              client satisfaction."
            />
            <JobRole
              description="Lead the GIS team technically for over 2 years, 
              assuring high quality standards while meeting deadlines. The team 
              was responsible for maintaining fully auto-scale infrastructure in 
              private and public cloud servers."
            />
            <JobRole
              description="Developed Python scripts to collect information about 
              the company’s applications and frameworks, increasing management 
              capabilities and knowledge about overall infrastructure state."
            />
            <JobRole
              description="Joined the company’s first DevOps team. The team was 
              responsible for maintaining Git, Jenkins, JIRA, Urban Code and 
              other DevOps technologies."
            />
            <JobRole
              description="Provisioned new infrastructure resources on the 
              company’s private cloud and also planned its migration to a public 
              cloud, such as AWS."
            />
        </JobExperience>
        <hr />
        <JobExperience 
          company="Petrobras"
          period="Ago/2012 - Sep/2014"
          location="Rio de Janeiro, RJ, Brazil"
          title="Infrastructure Analyst">
            <JobRole
              description="Proposed and developed a C# Windows service to check 
              company’s proxy health status, in order to prevent electronic 
              invoice delivery errors. The service helped reduce downtime from 
              critical failures due to proxy fault."
            />
            <JobRole
              description="Prepared and delivered infrastructure for the new SAP 
              Fiori servers, along with software installation and configuration. 
              The product increased user’s experience by allowing applications 
              with new user interface elements."
            />
            <JobRole
              description="Participated in a proof of concept project for SAP 
              SuccessFactors’s SaaS platform adoption for company’s HR 
              processes. This product was the first one to use SaaS in the 
              company, paving the road for new applications based on this model."
            />
        </JobExperience>
        <hr />
        <JobExperience 
          company="Chemtech"
          period="Jun/2008 - Jun/2012"
          location="Salvador, BA, Brazil"
          title="Software Developer">
            <JobRole
              description="Developed a C# software to automate the generation of 
              engineering project’s documents according to Microsoft SQL Server 
              database information. This software helped the company reduce the 
              required work hours of engineers to complete documents for two 
              major projects."
            />
            <JobRole
              description="Developed a C# Windows service to detect and restore 
              errors on Oil Transportation Management software for a client. The 
              service helped reduce the support tickets, increasing the 
              profitability of the support contract."
            />
            <JobRole
              description="Fixed bugs and implemented new features on a C# 
              Manufacturing Execution System software for a client."
            />
        </JobExperience>
        <hr />
        <JobExperience 
          company="Compuvox"
          period="Mar/2008 - May/2008"
          location="Salvador, BA, Brazil"
          title="Software Developer">
            <JobRole
              description="Fixed a major software bug in Asterisk’s driver that 
              was delaying the release of company’s digital voice solution."
            />
            <JobRole
              description="Started development using C on a new platform to 
              migrate company’s voice solution from analog to digital using the 
              open source communications software Asterisk."
            />
        </JobExperience>
      </ul>
    </div>
  );
}

export default Experience;