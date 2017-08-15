import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Timer from './timer/Timer';
import ProjectRouter from './project/ProjectRouter';

class Main extends React.Component {
  render() {
    return (
      <main>
        <div className='container-fluid'>
          <Switch>
            <Route exact path='/' component={Timer}/>
            <Route path='/projects' component={ProjectRouter}/>
          </Switch>
        </div>
      </main>
    );
  }
}

export default Main;
