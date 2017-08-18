import React from 'react';

class TimerCountdownControls extends React.Component {
  setClass(val) {
    return (val === this.props.type) ? 'active btn btn-warning'
    : 'btn btn-warning';
  }
  render() {
    let {onSetType} = this.props;

    return (
      <div className='timer-countdown-controls row text-center'>
        <div className='col-xs-12 col-sm-12 col-md-12'>

            <div className="btn-group btn-group-lg" role="group">
              <label role="button" ref='timer-button' className={this.setClass('timer')} onClick={onSetType.bind(null, 'timer')}>Timer</label>
            </div>
            <div className="btn-group btn-group-lg" role="group">
              <label role="button" ref='countdown-button' className={this.setClass('countdown')} onClick={onSetType.bind(null, 'countdown')}>Countdown</label>
            </div>
            <div className="btn-group btn-group-lg" role="group">
              <label role="button" ref='countdown-button' className={this.setClass('short')} onClick={onSetType.bind(null, 'short')}>Short Break</label>
            </div>
            <div className="btn-group btn-group-lg" role="group">
              <label role="button" ref='countdown-button' className={this.setClass('long')} onClick={onSetType.bind(null, 'long')}>Long Break</label>
            </div>

        </div>
      </div>
    );
  }
}

export default TimerCountdownControls;
