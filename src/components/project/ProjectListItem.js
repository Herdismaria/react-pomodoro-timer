import React from 'react';

class ProjectListItem extends React.Component {

  formatSeconds(totalSeconds) {
    var days = Math.floor(totalSeconds / 86400);
    var secondsLeft = totalSeconds - (days * 86400);
    var hours = Math.floor(secondsLeft / 3600);
    secondsLeft = secondsLeft - (hours * 3600);
    var minutes = Math.floor(secondsLeft / 60);
    var seconds = secondsLeft - (minutes * 60);

    if (seconds > 0) {
      seconds = seconds + ' seconds ';
    } else {
      seconds = '';
    }
    if (minutes > 0) {
      minutes = minutes + ' minutes ';
    } else {
      minutes = ''
    }
    if (hours > 0) {
      hours = hours + ' hours ';
    } else {
      hours = '';
    }
    if (days > 0) {
      days = days + ' days ';
    } else {
      days = '';
    }
    return days + hours + minutes + seconds;
  }

  render() {
    let projectName = this.props.name;
    let projectTotalTime = this.formatSeconds(this.props.totalSeconds);
    let projectStatus = this.props.status;
    return (
      <div className='project-list-item'>
        <div className="col-sm-4 col-md-6">
          <div className="thumbnail grow">
            <div className="caption">
              <h3 className='text-center'>{projectName}</h3>
              <p className='text-center'>{projectTotalTime}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectListItem;
