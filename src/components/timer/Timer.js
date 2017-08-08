import React from 'react';

import TimerControls from './TimerControls';
import TimerClock from './TimerClock';
import TimerCountdownControls from './TimerCountdownControls';
import TimerStore from '../../stores/TimerStore';
import TimerActions from '../../actions/TimerActions';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = TimerStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    TimerStore.listen(this.onChange);
  }

  componentWillUnmount() {
    TimerStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  toggleTimer() {
    TimerActions.toggleTimer();
  }

  resetTimer() {
    TimerActions.resetTimer();
  }

  setType(type) {
    TimerActions.setType(type);
  }

  render() {
    return (
      <div className='timer'>
        <div className='container'>
          <div className='row row-centered'>
            <div className='col-md-6 col-md-offset-3'>
              <TimerCountdownControls type={this.state.type}  onSetType={this.setType}/>
              <TimerClock seconds={this.state.totalSeconds}/>
              <TimerControls onToggle={this.toggleTimer.bind(this)} onReset={this.resetTimer.bind(this)}
                timerStatus={this.state.timerStatus}/>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  export default Timer;
