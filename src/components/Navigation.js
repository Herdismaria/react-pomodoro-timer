import React from 'react';
import { Link } from 'react-router-dom';
import Timer from './timer/Timer.js';

class Navigation extends React.Component {
  render() {
    return (
      <nav className='navbar navbar-default navbar-static-top'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <Link to='/' className='navbar-brand'>
              MY APP
            </Link>
          </div>
          <div>
            <ul className='nav navbar-nav'>
              <li>
                <Link to='/'>Timer</Link>
              </li>
              <li>
                <Link to='/projects'>Projects</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
