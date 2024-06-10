import { Component } from "react";

interface IState {
  attributeName1: number;
}

class Question3 extends Component<{}, IState> {
  constructor(props: any) {
    super(props);

    this.state = {attributeName1: 0};
  }

  render() {
    return (
      <div style={{backgroundColor: "lightgray", padding: "10px 40px", marginBottom: "20px"}}>
        <h1>Question 3</h1>
        <p>
          考慮以下React類別組件，其中多次調用`this.setState()`來更新同一個狀態屬性，
          請問console.log()的輸出是什麼？
        </p>
        <h2 id="target">attributeName1: {this.state.attributeName1}</h2>
        <button onClick={() => {
          this.setState({attributeName1: this.state.attributeName1 + 1});
          this.setState((state) => {
            console.log('First state value: ', state.attributeName1);
            console.log('First real dom value: ', document.getElementById('target')?.textContent);
          }, () => {
            console.log('Second state value: ', this.state.attributeName1);
            console.log('Second real dom value: ', document.getElementById('target')?.textContent);
          });
        }}>Increment
        </button>
      </div>
    )
  }
}

export default Question3;
