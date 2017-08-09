import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <div className='container text-center'>
          <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-12'>
              <h3 className='lead'><strong>Information</strong> and <strong>Copyright</strong></h3>
              <p>Powered by <strong>Node.js</strong> and <strong>React</strong>.</p>
              <p>You may view the <a target='_blank' href='https://github.com/Herdismaria/react-pomodoro-timer'>Source Code</a> behind this project on GitHub.</p>
              <p>© 2017 Herdis Maria Sigurdardottir.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
