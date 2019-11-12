import React, { Component } from 'react';
import './index.css';

class Institution extends Component {
  render() {
    return (
      <li>
        <div className="institution">
          <h3>{this.props.name}</h3>
          <p>{this.props.period}</p>
        </div>
        <div className="courseDetails">
          <h4>{this.props.course}</h4>
          <p>{this.props.description}</p>
        </div>
      </li>
    );
  }
}

export default Institution;
