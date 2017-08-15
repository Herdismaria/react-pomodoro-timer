import React from 'react';

class SingleProject extends React.Component {
  render() {
    return (
      <div className='single-project'>
        <h1>KOMIN I SINGLE</h1>
        <h3>{this.props.match.params.projectId}</h3>
      </div>
    );
  }
}

export default SingleProject;
