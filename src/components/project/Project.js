import React from 'react';

import ProjectStore from '../../stores/ProjectStore';
import ProjectActions from '../../actions/ProjectActions';
import ProjectList from './ProjectList';
import AddProject from './AddProject';
import Timer from '../timer/Timer';

class Project extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='project'>
        <div className='row'>
          <div className='col-xs-12 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2 '>
            <AddProject />
            <ProjectList />
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
