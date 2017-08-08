import alt from '../alt';

class TimerActions {
  constructor() {
    this.generateActions('updateTimer', 'toggleTimer', 'resetTimer',);
  }

  setType(type) {
    return type;
  }
}

export default alt.createActions(TimerActions);
