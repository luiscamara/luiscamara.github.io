import React, { Component } from 'react';
import './index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class Skill extends Component {
  createClassification = () => {
    let stars = [];
    for(let i = 0; i < this.props.rating; i++) {
      stars.push(<FontAwesomeIcon icon={faStar} color="#ffffff" />);
    }

    return stars;
  }

  render() {
    return (
      <div className='skill'>
        <p>{this.props.name}</p>
        <span className="score">
          {this.createClassification()}          
        </span>
      </div>
    );
  }
}

export default Skill;