import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  render() {
    return (
      <nav className='navbar navbar-default navbar-static-top'>
       <div className='navbar-header'>
         <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
         <Link to='/' className='navbar-brand'>
            MY APP
          </Link>
       </div>
       <div id='navbar' className='navbar-collapse collapse'>
         <ul className='nav navbar-nav'>
           <li><Link to='/'>Timer</Link></li> 
         </ul>
       </div>
     </nav>
    );
  }
}

export default Navigation;
