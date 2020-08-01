import React, { FC, useState, useEffect } from 'react';
import CounterComponent from '../components/Counter';

const useTimer = (limitSec: number): [number, () => void] => {
  const [timeLeft, setTimeLeft] = useState(limitSec);

  const reset = () => {
    setTimeLeft(limitSec);
  }

  useEffect(() => {
    const tick = () => {
      setTimeLeft(prevTime => (prevTime === 0 ? limitSec : prevTime - 1));
    };
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  }, [limitSec])

  return [timeLeft, reset];
}

const CounterContainer: FC = () => {
  const LIMIT = 60;
  const [timeLeft, reset] = useTimer(LIMIT);

  return <CounterComponent timeLeft={timeLeft} reset={reset} />
};

export default CounterContainer;
