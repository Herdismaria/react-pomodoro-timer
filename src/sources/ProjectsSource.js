import ProjectsActions from '../actions/ProjectsActions';
import { firebaseRef } from '../firebase/index';
import moment from 'moment';

let ProjectsSource = {
  addProject: {
    remote(state) {
      return new Promise((resolve, reject) => {
        if (!firebaseRef) {
          resolve();
        }

        firebaseRef.child('projects').push().set({
          "name": state.newProject.name,
          "user": state.user,
          "totalSeconds": 0,
          "status": "not started",
          "created": moment().unix(),
        });

        resolve();
      });
    },
    success: ProjectsActions.projectAdded,
    error: ProjectsActions.projectNotAdded
  },
  getProjects: {
    remote(state) {
      return new Promise((resolve, reject) => {
        firebaseRef.child('projects').once("value", (dataSnapshot) => {
          var projects = dataSnapshot.val() || {};
          var parsedProjects = [];

          Object.keys(projects).forEach((projectId) => {
            parsedProjects.push({
              id: projectId,
              ...projects[projectId]
            });
          });
          resolve(parsedProjects);
        });
      });
    },
    success: ProjectsActions.getProjectsSuccess,
    error: ProjectsActions.getProjectfailed
  }

}

export default ProjectsSource;
