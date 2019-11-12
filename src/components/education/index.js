import React from 'react';
import './index.css';
import Institution from './institution';

function Education() {
  return (
    <div className="education">
      <h2>Education</h2>
      <hr />
      <ul className="listEducation">
        <Institution 
          name="Udacity" 
          period="Dez 2018 - Mar 2019" 
          course="AI Fundamentals and Machine Learning"
          description="The course is an introduction to Artificial Intelligence and Machine Learning. 
          This is where I got my knowledge of Python and some data science packages, as well as
          steps to retrieve, select and analyse data."
        />
        <Institution 
          name="UNIFACS" 
          period="Mar 2010 - Mar 2011" 
          course="Specialization in Networks and Telecommunications"
          description="Post-Graduate course on Telecommunications with a focus on Computer Networking. 
          I acquired specialized networking knowledge from this course."
        />
        <Institution 
          name="UNIFACS" 
          period="Jan 2003 - Dez 2007" 
          course="B.Sc. in Eletronics Engineering"
          description="Bachelor degree in Eletrical Engineering with focus on Eletronics. This course 
          gave me a good background in programming and embedded systems."
        />
      </ul>
    </div>
  );
}

export default Education;