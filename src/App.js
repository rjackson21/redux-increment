import './App.css';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/counter/counterSlice'


function App() {
  const { value } = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1> The count is: {value} </h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(33))}>Increment by 33 </button>
    </div>
  );
}

export default App;
