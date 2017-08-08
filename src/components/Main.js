import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Timer from './timer/Timer';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Timer}/>
          <Route path='/timer' component={Timer}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
