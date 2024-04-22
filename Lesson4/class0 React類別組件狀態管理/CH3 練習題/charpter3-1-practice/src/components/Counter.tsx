import React from "react";

interface ICounterState {
  count: number;
}

class Counter extends React.Component<{}, ICounterState> {
  state = {
    count: 0
  };

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default Counter;
