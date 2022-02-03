import React from 'react';
import { decrement, increment } from './counterSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/useToolkit';
import AbsolutePath from '@src/AbsolutePath';
import styles from './Counter.module.css';

function Counter() {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>{count}</div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          style={{ marginRight: '20px' }}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <AbsolutePath />
      </div>
    </div>
  );
}

export default Counter;
