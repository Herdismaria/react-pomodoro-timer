import React from 'react';
import { Link } from 'react-router-dom';
import ProjectListItem from './ProjectListItem';

const tableData = [
  {
    id: 1,
    name: 'Project 1',
    description: 'a basic description of project 1',
    totalSeconds: 3454443,
    status: 'done',
  }, {
    id: 2,
    name: 'Project 2',
    description: 'a basic description of project 2 this is a longer description dont know how long though',
    totalSeconds: 500303,
    status: 'in progress'
  }, {
    id: 3,
    name: 'Project 3',
    description: 'short',
    totalSeconds: 34,
    status: 'done'
  }, {
    id: 4,
    name: 'Project 4',
    description: 'very long very long very long very long very long very long very long very long very long very long very long very long very long very long very long very long very long very long very long very long very long very long very long very long very long vvery long ',
    totalSeconds: 345544,
    status: 'in progress'
  }, {
    id: 5,
    name: 'Project 5',
    description: 'a basic description of project 1',
    totalSeconds: 343454,
    status: 'not started'
  }, {
    id: 6,
    name: 'Project 6',
    description: 'a basic description of project 1',
    totalSeconds: 3469754,
    status: 'not started'
  }, {
    id: 7,
    name: 'Project 7',
    description: 'a basic description of project 1',
    totalSeconds: 1,
    status: 'in progress'
  }
];

class ProjectList extends React.Component {
  render() {
    return (
      <div className='project-list'>
        {tableData.map( (project, index) => (
          <Link to={'/projects/' + index} key={index}><ProjectListItem {...project}/></Link>
        ))}
        <a href='#'>
          <div className='add-project'>
            <div className="col-sm-4 col-md-6">
              <div className="thumbnail grow">
                <div className="caption text-center">
                  <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default ProjectList;
