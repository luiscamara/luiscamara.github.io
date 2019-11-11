import React from 'react';
import './index.css';

function Education() {
  return (
    <div className="education">
      <h2>Education</h2>
      <hr />
      <ul className="list">
        <li>
          <div className="institution">
            <h3>Udacity</h3>
            <p>Dez 2018 - Mar 2019</p>
          </div>
          <div className="courseDetails">
            <h4>AI Fundamentals and Machine Learning</h4>
            <p>Description</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Education;