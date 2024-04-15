import { Component } from "react";

class Counter extends Component {
  // 定義狀態
  state: {
    count: number;
  };

  constructor(props: any) {
    super(props);
    // 初始化狀態，你可以將狀態視為組件的私有數據
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        {/* 顯示當前計數，用`this.state.狀態名稱`來訪問狀態 */}
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Add One</button>
      </div>
    );
  }
}

export default Counter;
