import React, { FC } from 'react';

interface AppProps {
  timeLeft: number;
  reset: () => void
}

const CounterComponent: FC<AppProps> = ({ timeLeft, reset }) => {
  return (
    <div className="container">
      <header><h1>タイマー</h1></header>
      <div className="counter">
        {timeLeft}
      </div>
      <div className="button">
        <button onClick={reset}>reset</button>
      </div>
    </div>
  )
}

export default CounterComponent;
