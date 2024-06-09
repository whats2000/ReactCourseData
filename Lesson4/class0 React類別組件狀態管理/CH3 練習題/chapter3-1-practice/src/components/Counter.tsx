import React from "react";

interface ICounterState {
  count: number;
}

class Counter extends React.Component<{}, ICounterState> {
  state = {
    count: 0
  };

  handleClick() {
    // 給你一個提示，看這個 console.log 會印出什麼
    console.log(this);
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <p>Open the console to see the error message</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default Counter;
