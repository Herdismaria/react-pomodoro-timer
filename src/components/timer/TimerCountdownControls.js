import React from 'react';

class TimerCountdownControls extends React.Component {
  render() {
    let type = this.props.type;

    return (
      <div>
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-12'>
            <div className='timer-countdown-controls'>
              <div className="btn-group btn-group-justified btn-group-vertical" role="group" aria-label="...">
                <div className="btn-group" role="group">
                  <a role="button" ref='timer-button' className={(type === 'timer')
                    ? 'active btn btn-warning'
                    : 'btn btn-warning'} onClick={this.props.onSetType.bind(null, 'timer')}>Timer</a>
                </div>
                <div className="btn-group" role="group">
                  <a role="button" ref='countdown-button' className={(type === 'countdown')
                    ? 'btn btn-warning active'
                    : 'btn btn-warning'} onClick={this.props.onSetType.bind(null, 'countdown')}>Countdown</a>
                </div>
                <div className="btn-group" role="group">
                  <a role="button" ref='countdown-button' className={(type === 'short')
                    ? 'btn btn-warning active'
                    : 'btn btn-warning'} onClick={this.props.onSetType.bind(null, 'short')}>Short Break</a>
                </div>
                <div className="btn-group" role="group">
                  <a role="button" ref='countdown-button' className={(type === 'long')
                    ? 'btn btn-warning active'
                    : 'btn btn-warning'} onClick={this.props.onSetType.bind(null, 'long')}>Long Break</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TimerCountdownControls;
