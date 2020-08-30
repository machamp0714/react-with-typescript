import React, { FC } from 'react';

export interface CounterProps {
  count?: number;
  add?: (amount: number) => void;
  decrement?: () => void;
  increment?: () => void;
}

const Counter: FC<CounterProps> = ({
  count = 0,
  add = () => undefined,
  decrement = () => undefined,
  increment = () => undefined
}) => (
    <div className="container">
      <div className="count">{count}</div>
      <button onClick={decrement}>-1</button>
      <button onClick={increment}>+1</button>
      <button onClick={() => add(10)}>+10</button>
    </div>
  )

export default Counter;