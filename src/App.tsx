import React from 'react';
import './App.css';

interface TimerState {
  timeLeft: number
}
const LIMIT = 60;

class App extends React.Component<{}, TimerState> {
  timerId?: NodeJS.Timeout; 

  constructor(props: {}) {
    super(props)
    this.state = { timeLeft: LIMIT }
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick()
    }, 1000)
  }

  componentDidUpdate() {
    if (this.state.timeLeft === 0) {
      this.reset()
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId as NodeJS.Timeout)
  }

  tick = () => {
    this.setState((prevState) => ({
      timeLeft: prevState.timeLeft - 1,
    }));
  }

  reset = () => {
    this.setState({ timeLeft: LIMIT })
  }

  stop = () => {
    clearInterval(this.timerId as NodeJS.Timeout)
  }

  start = () => {
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000);
  }

  render() {
    const { timeLeft } = this.state;
    return (
      <div>
        <h1>タイマー</h1>
        <div>
          <div>TIME</div>
          {timeLeft}
        </div>
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.stop}>stop</button>
        <button onClick={this.start}>start</button>
      </div>
    )
  }
}

export default App;
