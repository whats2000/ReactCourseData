import { Component } from "react";

interface IWrongExample4State {
  count: number;
}

class WrongExample4 extends Component<{}, IWrongExample4State> {
  state = {
    count: 0
  };

  incrementA = () => {
    this.setState({count: this.state.count++});
  }

  incrementB = () => {
    this.setState({count: ++this.state.count});
  }

  render() {
    return (
      <div style={{border: "1px solid black", margin: "10px", padding: "10px"}}>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementA}>Increment by using this.state.count++</button>
        <button onClick={this.incrementB}>Increment by using ++this.state.count</button>
      </div>
    )
  }
}

export default WrongExample4;
