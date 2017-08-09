import React from 'react';

class TimerCountdownControls extends React.Component {
  render() {
    let type = this.props.type;

    return (
      <div className='timer-countdown-controls row text-center'>
        <div className='col-xs-12 col-sm-12 col-md-12'>

            <div className="btn-group btn-group-lg" role="group">
              <label role="button" ref='timer-button' className={(type === 'timer')
                ? 'active btn btn-warning'
                : 'btn btn-warning'} onClick={this.props.onSetType.bind(null, 'timer')}>Timer</label>
            </div>
            <div className="btn-group btn-group-lg" role="group">
              <label role="button" ref='countdown-button' className={(type === 'countdown')
                ? 'btn btn-warning active'
                : 'btn btn-warning'} onClick={this.props.onSetType.bind(null, 'countdown')}>Countdown</label>
            </div>
            <div className="btn-group btn-group-lg" role="group">
              <label role="button" ref='countdown-button' className={(type === 'short')
                ? 'btn btn-warning active'
                : 'btn btn-warning'} onClick={this.props.onSetType.bind(null, 'short')}>Short Break</label>
            </div>
            <div className="btn-group btn-group-lg" role="group">
              <label role="button" ref='countdown-button' className={(type === 'long')
                ? 'btn btn-warning active'
                : 'btn btn-warning'} onClick={this.props.onSetType.bind(null, 'long')}>Long Break</label>
            </div>

        </div>
      </div>
    );
  }
}

export default TimerCountdownControls;
