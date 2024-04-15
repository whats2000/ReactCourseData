import { Component } from "react";

interface IState {
  attributeName1: number;
  attributeName2: number;
}

class Question1 extends Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      attributeName1: 0,
      attributeName2: 0,
    };
  }

  render() {
    return (
      <div style={{backgroundColor: "lightgray", padding: "10px 40px", marginBottom: "20px"}}>
        <h1>Question 1</h1>
        <p>
          考慮以下React類別組件，其中多次調用`this.setState()`來更新同一個狀態屬性，
          請問最後`attributeName1`和`attributeName2`的值是多少？
        </p>
        <h2>attributeName1: {this.state.attributeName1}</h2>
        <h2>attributeName2: {this.state.attributeName2}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={() => this.setState({attributeName1: 0})}>Reset</button>
      </div>
    );
  }

  handleIncrement = () => {
    this.setState({
      attributeName1: this.state.attributeName1 + 1,
      attributeName2: this.state.attributeName2 + 1
    });
    this.setState({ attributeName1: this.state.attributeName1 + 2 });
    this.setState({ attributeName1: this.state.attributeName1 + 3 });
  }
}

export default Question1;
