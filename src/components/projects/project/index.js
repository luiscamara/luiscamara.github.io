import React, { Component } from 'react';
import './index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class Project extends Component {
  renderTechs = () => {
    if(this.props.techs !== undefined) {
      let techs = this.props.techs;
      let techsHTML = [];
      for(let i = 0; i < techs.length; i++) {
        techsHTML.push(<div key={i} className='tech'>{techs[i]}</div>);
      }

      return techsHTML;
    }

    return '';
  }

  render() {
    return (
      <div className='project'>
        <h5>{this.props.title}</h5>
        <div className='content'>
          <div className='screenshot'>
            <img src={this.props.screenshot} alt='Project screenshot'/>
          </div>
          <div className='description'>
            <div className='textDescription'>{this.props.description}</div>
            <div className='techs'>
              {this.renderTechs()}
            </div>
            <a href={this.props.github} className='githubLink' target='_blank' rel='noopener noreferrer'>
              <p>Source code</p>
              <div>
                <div className='icon'>
                  <FontAwesomeIcon icon={faGithub} color="#282a36" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>      
    );
  }
}

export default Project;