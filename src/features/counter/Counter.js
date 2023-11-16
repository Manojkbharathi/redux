import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  decrement } from './counterSlice';
import { increment } from './counterSlice';
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
