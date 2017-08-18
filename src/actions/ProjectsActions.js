import alt from '../alt';

class ProjectsActions {
  constructor() {
    this.generateActions(
      'toggleAddButton',
      'addProject',
      'projectAdded',
      'projectNotAdded',
      'getProjects',
      'projectsLoading',
      'getProjectsSuccess',
      'getProjectfailed'
  );}
}

export default alt.createActions(ProjectsActions);
