import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Projects from './Projects';
import SingleProject from './SingleProject';

const ProjectRouter = () => (
  <Switch>
    <Route exact path='/projects' component={Projects}/>
    <Route path='/projects/:projectId' component={SingleProject}/>
  </Switch>
)

export default ProjectRouter;
