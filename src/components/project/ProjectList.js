import React from 'react';
import {Link} from 'react-router-dom';
import ProjectListItem from './ProjectListItem';

class ProjectList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      projectName: '',
    }
    this.onChange = this.onChange.bind(this);
    this.handleAddProject = this.handleAddProject.bind(this);
  }

  onChange(e) {
    this.setState({projectName: e.target.value});
  }

  handleAddProject(e) {
    e.preventDefault();

    if (this.state.projectName === '') {
      return;
    }

    this.props.onAddProject(this.state.projectName);
    this.setState({projectName: ''});
  }

  render() {
    var {projects, onToggleAddButton, showAddButton} = this.props;
    var renderProjects = () => {
      if (projects) {
        return projects.map((project) => (
          <Link to={'/projects/' + project.id} key={project.id}>
            <ProjectListItem {...project}/></Link>
        ));
      }
      return (
        <p className='no-project-message text-center'>You have no projects</p>
      );
    };

    let button = '';
    if (showAddButton) {
      button =
      <div className='button-container'>
        <div className={projects ? 'col-sm-4 col-md-6 text-center' : 'col-sm-12 col-md-12 text-center'}>
          <div className={projects ? 'thumbnail add-button' : 'thumbnail add-button no-projects-button'} onClick={onToggleAddButton}>
            <div className='form-inline'>
              <div className='form-group'>
                <input type='text' className='form-control' onChange={this.onChange} placeholder='Project Name'/>
                <label type='button' className='btn btn-default' onClick={this.handleAddProject}>
                  <span className='glyphicon glyphicon-plus' aria-hidden='true'></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>;
    } else {
      button =
      <div className='button-container'>
        <div className={projects ? 'col-sm-4 col-md-6' : 'col-sm-12 col-md-12'}>
          <div className={projects ? 'thumbnail grow add-button' : 'thumbnail add-button grow no-projects-button'} onClick={onToggleAddButton}>
            <div className='caption text-center'>
              <span className='glyphicon glyphicon-plus large-glyph' aria-hidden='true'></span>
            </div>
          </div>
        </div>
      </div>;
    }

    return (
      <div className='project-list'>
        {renderProjects()}
        {button}
      </div>
    );
  }
}

export default ProjectList;
