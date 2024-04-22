import { Component } from "react";

interface IWrongExample2State {
  count: number;
}

class WrongExample2 extends Component<{}, IWrongExample2State> {
  state = {
    count: 0
  };

  incrementByTwo = () => {
    // 雖然會執行兩次，但是 React 會將兩次 setState 合併成一次
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementByTwo}>Increment by two?</button>
      </div>
    )
  }
}

export default WrongExample2;
