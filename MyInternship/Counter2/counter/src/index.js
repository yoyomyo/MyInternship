import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';

let store = createStore(counter)

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return Math.max(0, state - 1)
    case 'RESET':
      return 0
    default:
      return state
  }
}

function Counter() {
  const [count, setCount] = useState(store.getState());

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="content">
      <h1 className="center"><b>Counter</b></h1>
      <h2 className="center" id="count">{count}</h2>
      <div className="center buttons-wrapper"> 
        <button 
        className="plus button black" 
        onClick={() => {
          store.dispatch({ type: 'INCREMENT' });
          setCount(store.getState());
        }
        }>
          +1
        </button> 
        <button 
        className="minus button black" 
        onClick={() => {
          store.dispatch({ type: 'DECREMENT' });
          setCount(store.getState());
        }}>
          -1
        </button>
        <button 
        className="reset button black" 
        onClick={() => {
          store.dispatch({ type: 'RESET' });
          setCount(store.getState());
        }}>
          reset
        </button>
      </div>
    </div>
  );
}

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);
