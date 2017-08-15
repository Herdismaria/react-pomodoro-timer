import React from 'react';
import { Link } from 'react-router-dom';

import ProjectStore from '../../stores/ProjectStore';
import ProjectActions from '../../actions/ProjectActions';
import ProjectList from './ProjectList';
import SingleProject from './SingleProject';
import AddProject from './AddProject';
import Timer from '../timer/Timer';

class Projects extends React.Component {
  render() {
    return (
      <div className='projects'>
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-6 col-md-offset-3 '>
            <AddProject />
            <ProjectList />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
