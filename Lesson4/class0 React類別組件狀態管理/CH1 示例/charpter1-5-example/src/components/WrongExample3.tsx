import { Component } from "react";

interface IWrongExample3State {
  count: number;
}

class WrongExample3 extends Component<{}, IWrongExample3State> {
  state = {
    count: 0
  };

  increment = () => {
    console.log('Before setState:', this.state.count);

    this.setState({count: this.state.count + 1});

    console.log('After setState:', this.state.count);
  }

  render() {
    return (
      <div style={{border: "1px solid black", margin: "10px", padding: "10px"}}>
        <h1>Count: {this.state.count}</h1>
        <p>Open the console to see the wrong behavior</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}

export default WrongExample3;
