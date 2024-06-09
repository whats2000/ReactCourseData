import React from "react";

interface ICounterState {
  count: number;
}

class Counter1 extends React.Component<{}, ICounterState> {
  // 需先定義 handleClick 的型別
  private readonly handleClick: () => void;

  state = {
    count: 0
  };

  constructor(props: {}) {
    super(props);

    // 定義 handleClick 的箭頭函數
    this.handleClick = () => {
      this.setState({ count: this.state.count + 1 });
    }
  }

  render() {
    return (
      <div style={{ border: "1px solid black", padding: "10px" }}>
        <h1>Count: {this.state.count}</h1>
        <p>在 `constructor` 中綁定義箭頭函數</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default Counter1;
