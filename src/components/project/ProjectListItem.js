import React from 'react';

class ProjectListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  formatSeconds(totalSeconds) {
    var hours = Math.floor(totalSeconds / 3600);
    var secondsLeft = totalSeconds - (hours * 3600);
    var minutes = Math.floor(secondsLeft / 60);
    var seconds = secondsLeft - (minutes * 60);
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (hours < 10) {
      hours = '0' + hours;
    }
    return hours + ':' + minutes + ':' + seconds;
  }

  formatDescription(description) {
    if (description.length > 80) {
      return description.substr(0, 70);
    } else {
      return description;
    }
  }

  render() {
    let projectName = this.props.name;
    let projectDescription = this.formatDescription(this.props.description);
    let projectTotalTime = this.formatSeconds(this.props.totalSeconds);
    let projectStatus = this.props.status;
    return (
      <div className='project-list-item'>
        <div className="col-sm-6 col-md-6">
          <div className="thumbnail">
            <div className="caption">
              <h3 className='text-center'>{projectName}</h3>
              <p className='project-description'>{projectDescription}</p>
              <p>{projectTotalTime}</p>
              <p>{projectStatus}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectListItem;
