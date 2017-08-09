import React from 'react';

import Navigation from './Navigation';
import Footer from './Footer';
import Main from './Main';

class App extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <Navigation />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
