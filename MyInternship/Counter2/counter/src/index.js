import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Counter() {
  const [count, setCount] = useState(0);
    return (
      <div class="content">
        <h1 class="center"><b>Counter</b></h1>
        <h2 class="center" id="count">{count}</h2>
        <div class="center buttons-wrapper"> 
          <button 
          class="plus button black" 
          onClick={() => setCount(count + 1)}>
            +1
          </button> 
          <button 
          class="minus button black" 
          onClick={() => setCount(Math.max(0, count-1))}>
            -1
          </button>
          <button 
          class="reset button black" 
          onClick={() => setCount(0)}>
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
