import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Counter extends React.Component {
  constructor(props) {    
    super(props);    
    this.state = {      
      count: 0,    
    };  
  }

  increment(num) {
    this.setState(state => ({
      count : Math.max(0, state.count + num)
    }));
  }

  render() {
    return (
      <div class="content">
        <h1 class="center"><b>Counter</b></h1>
        <h2 class="center" id="count">{this.state.count}</h2>
        <div class="center buttons-wrapper"> 
          <button 
          class="plus button black" 
          onClick={() => this.increment(1)}>
            +1
          </button> 
          <button 
          class="minus button black" 
          onClick={() => this.increment(-1)}>
            -1
          </button>
          <button 
          class="reset button black" 
          onClick={() => this.setState({count: 0})}>
            reset
          </button>
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);
