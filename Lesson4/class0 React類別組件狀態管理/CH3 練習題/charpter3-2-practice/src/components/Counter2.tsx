import React from "react";

interface ICounterState {
  count: number;
}

class Counter2 extends React.Component<{}, ICounterState> {
  state = {
    count: 0
  };

  // Your code here



  // End of your code

  render() {
    return (
      <div style={{ border: "1px solid black", padding: "10px" }}>
        <h1>Count: {this.state.count}</h1>
        <p>使用上述箭頭函數的簡寫</p>
        { /* Your code here */ }
        { /* <button onClick={...}>Click me</button> */ }
        { /* End of your code */ }
      </div>
    );
  }
}

export default Counter2;
