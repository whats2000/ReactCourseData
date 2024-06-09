import { Component } from "react";

interface IWhatAboutFunctionSetStateState {
  count: number;
}

class WhatAboutFunctionSetState extends Component<{}, IWhatAboutFunctionSetStateState> {
  state = {
    count: 0,
  };

  handleIncrease = () => {
    this.setState(
      (prevState) =>  {
        return { count: prevState.count + 1 };
      }
    );

    this.setState(
      (prevState) =>  {
        return { count: prevState.count + 1 };
      }
    );

    this.setState(
      (prevState) =>  {
        return { count: prevState.count + 1 };
      }
    );
  };

  render() {
    return (
      <div style={{border: "1px solid black", margin: "10px", padding: "10px"}}>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleIncrease}>Increase</button>
      </div>
    );
  }
}

export default WhatAboutFunctionSetState;
