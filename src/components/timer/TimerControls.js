import React from 'react';

class TimerControls extends React.Component {
  render() {
    var renderStartStopButton = () => {
      if (this.props.timerStatus === 'started') {
        return <label type="button" className="btn btn-warning btn-lg" onClick={this.props.onToggle}><span className="glyphicon glyphicon-pause" aria-hidden="true"></span></label>
      } else {
        return <label type="button" className="btn btn-default btn-lg" onClick={this.props.onToggle}><span className="glyphicon glyphicon-play" aria-hidden="true"></span></label>
      }
    };

    return (
      <div className='timer-buttons text-center'>
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-12'>
            <p>
              {renderStartStopButton()}
              <label type="button" className="btn btn-primary btn-lg" onClick={this.props.onReset}><span className="glyphicon glyphicon-stop" aria-hidden="true"></span></label>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default TimerControls;
