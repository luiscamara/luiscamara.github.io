import React from 'react';
import './index.css';

import Skill from './skill';

function Abilities() {
  return (
    <div className="abilities">
      <h2>Abilities</h2>
      <hr />
      <div className="skills">
        <div className="skillColumns">
          <div className="skillColumn">
            <h5>Programming Languages</h5>
            <hr />
            <Skill name="Java" rating="5"/>
            <Skill name="Javascript" rating="5"/>
            <Skill name="C#" rating="5"/>
            <Skill name="C++" rating="4"/>
            <Skill name="C" rating="4"/>
            <Skill name="Dart" rating="4"/>
            <Skill name="Python" rating="3"/>
          </div>
          <div className="skillColumn">
            <h5>Frameworks</h5>
            <hr />
            <Skill name="Spring Boot" rating="5"/>
            <Skill name="Node.js" rating="5"/>
            <Skill name="React.js" rating="4"/>
            <Skill name="React Native" rating="4"/>
            <Skill name="Android/Java" rating="4"/>
            <Skill name="Redux" rating="2"/>
            <Skill name="Flutter" rating="2"/>
          </div>
          <div className="skillColumn">
            <h5>Databases</h5>
            <hr />
            <Skill name="Oracle" rating="5"/>
            <Skill name="PostgreSQL" rating="5"/>
            <Skill name="SQL Server" rating="4"/>
            <Skill name="MongoDB" rating="4"/>
            <Skill name="Redis" rating="3"/>
            <Skill name="RabbitMQ" rating="3"/>
            <Skill name="MySQL" rating="3"/>
          </div>
        </div>
      </div>
      <div className="skills">
        <div className="skillColumns">
          <div className="skillColumn">
            <h5>Cloud / Containers / Other</h5>
            <hr />
            <Skill name="Google Cloud Platform" rating="5"/>
            <Skill name="Heroku" rating="5"/>
            <Skill name="Git" rating="5"/>
            <Skill name="JIRA" rating="5"/>
            <Skill name="AWS" rating="4"/>
            <Skill name="Docker" rating="4"/>
            <Skill name="Jenkins" rating="3"/>
          </div>
          <div className="skillColumn">
            <h5>System Administration</h5>
            <hr />
            <Skill name="Windows Server" rating="5"/>
            <Skill name="Linux Server" rating="5"/>
            <Skill name="ArcGIS Enterprise" rating="5"/>
            <Skill name="IIS" rating="5"/>
            <Skill name="Tomcat" rating="5"/>
            <Skill name="Weblogic" rating="5"/>
            <Skill name="Apache Web Server" rating="4"/>
          </div>
          <div className="skillColumn">
            <h5>Scripting / Automation</h5>
            <hr />
            <Skill name="Linux Bash" rating="4"/>
            <Skill name="Windows Powershell" rating="4"/>
          </div>
        </div>
      </div>
      <hr />
      <div className="skills">
        <h5>Languages</h5>
        <br />
        <div className="skillColumns">
          <div className="skillColumn">
            <Skill name="Portuguese" rating="5"/>
          </div>
          <div className="skillColumn">
            <Skill name="English" rating="4"/>
          </div>
        </div>
      </div>
      <hr />
      <div className="skills">
        <h5>Tools</h5>
        <br />
        <div className="skillColumns">
          <div className="skillColumn">
            <Skill name="Intellij IDEA" rating="5"/>
            <Skill name="Netbeans" rating="5"/>
            <Skill name="Eclipse" rating="3"/>
            <Skill name="Visual Studio" rating="5"/>
            <Skill name="Visual Code" rating="5"/>
            <Skill name="JetBrains Rider" rating="5"/>
          </div>
          <div className="skillColumn">
            <Skill name="Insomnia" rating="5"/>
            <Skill name="Postman" rating="5"/>
            <Skill name="" rating="5"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Abilities;