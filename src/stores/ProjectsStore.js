import alt from '../alt';
import ProjectsActions from '../actions/ProjectsActions';
import ProjectsSource from '../sources/ProjectsSource';

class ProjectsStore {
  constructor() {
    this.user = 'Trudy';
    this.projects = null;
    this.newProject = null;
    this.showAddButton = false;
    this.isLoading = false;
    this.bindActions({
      handleToggleAddButton: ProjectsActions.toggleAddButton,
      handleAddProject: ProjectsActions.addProject,
      handleGetProjects: ProjectsActions.getProjects,
    });

    this.registerAsync(ProjectsSource);
  }

  handleGetProjects() {
    this.setState({
      isLoading: true
    });
    this.getInstance().getProjects().then((projects) => {

      this.setState({
        projects: projects,
        isLoading: false
      })
    });
  }

  handleToggleAddButton() {
    this.setState({
      showAddButton: !this.showAddButton
    })
  }

  handleAddProject(newProject) {
    this.setState({
      newProject: newProject,
      showAddButton: !this.showAddButton
    })
    this.getInstance().addProject();
  }
}

export default alt.createStore(ProjectsStore);
