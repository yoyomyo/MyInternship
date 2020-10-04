import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const content = css`
  display:block;
  margin: auto;
  width: 50%;
  padding: 10px;
`
const center = css`
  text-align: center;
`

const button = css`
  border: none;
  display: inline-block;
  padding: 8px 16px;
  vertical-align: middle;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  background-color: inherit;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  margin: 8px;
`

const black = css`
  color: #fff !important;
  background-color: #000 !important;
`

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
    <div css={content}>
      <h1 css={center}><b>Counter</b></h1>
      <h2 css={center} id="count">{count}</h2>
      <div css={center}> 
        <button 
        css={[button, black]}
        onClick={() => {
          store.dispatch({ type: 'INCREMENT' });
          setCount(store.getState());
        }
        }>
          +1
        </button> 
        <button 
        css={[button, black]}
        onClick={() => {
          store.dispatch({ type: 'DECREMENT' });
          setCount(store.getState());
        }}>
          -1
        </button>
        <button 
        css={[button, black]}
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
