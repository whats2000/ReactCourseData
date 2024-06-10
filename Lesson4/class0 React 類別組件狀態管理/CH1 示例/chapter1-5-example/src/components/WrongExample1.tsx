import { Component } from "react";

interface IWrongExample1State {
  count: number;
}

class WrongExample1 extends Component<{}, IWrongExample1State> {
  state = {
    count: 0
  };

  increment = () => {
    // 這實際上會導致 state 變更，但 React 不會重新渲染元件，以為 state 沒有變更
    this.state.count += 1;
  }

  render() {
    return (
      <div style={{border: "1px solid black", margin: "10px", padding: "10px"}}>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={() => this.setState({count: this.state.count})}>Update</button>
      </div>
    )
  }
}

export default WrongExample1;
