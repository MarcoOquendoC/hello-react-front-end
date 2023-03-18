import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  messageAsync,
} from './greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.greeting.value);

  return (
    <div>
      <h1>{message}</h1>
      <button type="button" onClick={() => dispatch(messageAsync())}>Get a New Message</button>
    </div>
  );
};

export default Greeting;
