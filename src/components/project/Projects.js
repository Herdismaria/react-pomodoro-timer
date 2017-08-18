import React from 'react';

import ProjectsStore from '../../stores/ProjectsStore';
import ProjectsActions from '../../actions/ProjectsActions';
import ProjectList from './ProjectList';
import Loader from './Loader';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = ProjectsStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    ProjectsStore.listen(this.onChange);
    ProjectsActions.getProjects();
  }

  componentWillUnmount() {
    ProjectsStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  toggleAddButton(){
    ProjectsActions.toggleAddButton();
  }

  addProject(projectName) {
    ProjectsActions.addProject({
      name: projectName,
    });
  }

  render() {
    var renderContent = () => {
      if (this.state.isLoading) {
        return <Loader />;
      } else {
        return <ProjectList projects={this.state.projects} showAddButton={this.state.showAddButton} onToggleAddButton={this.toggleAddButton.bind(this)} onAddProject={this.addProject}/>;
      }
    }
    return (
      <div className='projects'>
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-6 col-md-offset-3 '>
            {renderContent()}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
