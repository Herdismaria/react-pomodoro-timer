import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Timer from './timer/Timer';
import Project from './project/Project';

class Main extends React.Component {
  render() {
    return (
      <main>
        <div className='container-fluid'>
          <Switch>
            <Route exact path='/' component={Timer}/>
            <Route exact path='/projects' component={Project}/>
          </Switch>
        </div>
      </main>
    );
  }
}

export default Main;
