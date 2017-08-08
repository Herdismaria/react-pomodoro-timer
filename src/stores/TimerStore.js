import alt from '../alt';
import TimerActions from '../actions/TimerActions';

class TimerStore {
  constructor() {
    this.totalSeconds = 0;
    this.timerStatus = 'stopped';
    this.type = 'timer';
    this.bindActions({
      handleUpdateTimer: TimerActions.updateTimer,
      handleToggleTimer: TimerActions.toggleTimer,
      handleResetTimer: TimerActions.resetTimer,
      handleSetType: TimerActions.setType,
    });
  }

  handleResetTimer() {
    this.restartTimer();
    if (this.type === 'timer') {
      this.totalSeconds = 0;
    } else if (this.type === 'countdown') {
      this.totalSeconds = 60 * 25;
    } else if (this.type === 'short') {
      this.totalSeconds = 60 * 5;
    } else if (this.type === 'long') {
      this.totalSeconds = 60 * 10;
    }
  }

  handleTimerStart() {
    this.timer = setInterval(() => {
      this.totalSeconds++;
      this.emitChange();
    }, 1000);
  }

  handleCountdownStart() {
    this.timer = setInterval(() => {
      if (this.totalSeconds > 0) {
        this.totalSeconds--;
      }
      else {
        this.restartTimer();
        if (this.type === 'countdown') {
          this.totalSeconds = 60 * 25;
        } else if (this.type === 'short') {
          this.totalSeconds = 60 * 5;
        } else if (this.type === 'long') {
          this.totalSeconds = 60 * 10;
        }
      }
      this.emitChange();
    }, 1000);
  }

  handleToggleTimer() {
    console.log('handletoggletimer');
    switch (this.timerStatus) {
      case 'started':
      clearInterval(this.timer);
      this.timer = undefined;
      this.timerStatus = 'paused';
      break;
      case 'stopped':
      if (this.type === 'timer') {
        this.handleTimerStart();
      } else {
        this.handleCountdownStart();
      }
      this.timerStatus = 'started'
      break;
      case 'paused':
      if (this.type === 'timer') {
        this.handleTimerStart();
      } else {
        this.handleCountdownStart();
      }
      this.timerStatus = 'started';
      break;
    }
  }

  handleSetType(type) {
    if (type === 'countdown') {
      this.restartTimer();
      this.type = 'countdown';
      this.totalSeconds = 60 * 25;
    } else if (type === 'timer') {
      this.restartTimer();
      this.type = 'timer';
      this.totalSeconds = 0;
    } else if (type === 'short') {
      this.restartTimer();
      this.type = 'short';
      this.totalSeconds = 60 * 5;
    } else if (type === 'long') {
      this.restartTimer();
      this.type = 'long';
      this.totalSeconds = 60 * 10;
    }
  }

  restartTimer() {
    this.timerStatus = 'stopped';
    clearInterval(this.timer);
    this.timer = undefined;
  }
}

export default alt.createStore(TimerStore);
