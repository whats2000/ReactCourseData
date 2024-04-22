import React from "react";

interface ICounterState {
  count: number;
}

class Counter5 extends React.Component<{}, ICounterState> {
  state = {
    count: 0
  };

  render() {
    // your code here



    // End of your code

    return (
      <div style={{ border: "1px solid black", padding: "10px" }}>
        <h1>Count: {this.state.count}</h1>
        <p>直接在 `render()` 中定義箭頭函數</p>
        { /* Your code here */ }
        { /* <button onClick={...}>Click me</button> */ }
        { /* End of your code */ }
      </div>
    );
  }
}

export default Counter5;
