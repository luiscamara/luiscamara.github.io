import React, { Component } from 'react';
import './index.css';

class JobRole extends Component {
  render() {
    return (
      <li>
        <p>{this.props.description}</p>
      </li>
    );
  }
}

export default JobRole;