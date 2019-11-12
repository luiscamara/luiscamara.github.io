import React, { Component } from 'react';
import './index.css';

class JobRole extends Component {
  render() {
    return (
      <li>
        <li>
          <p>{this.props.description}</p>
        </li>
      </li>
    );
  }
}

export default JobRole;