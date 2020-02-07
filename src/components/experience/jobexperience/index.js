import React, { Component } from 'react';
import './index.css';

class JobExperience extends Component {
  render() {
    return (
      <li className="listExperiences">
        <div className="company">
          <h4>{this.props.company}</h4>
          <p>
            {this.props.period}
            <br />
            {this.props.location}
          </p>
        </div>
        <div className="roles">
          <h4>{this.props.title}</h4>
          <ul>
            {this.props.children}
          </ul>          
        </div>
      </li>
    );
  }
}

export default JobExperience;
