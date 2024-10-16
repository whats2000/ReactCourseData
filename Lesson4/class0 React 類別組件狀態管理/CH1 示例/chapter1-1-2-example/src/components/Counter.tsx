import { Component } from "react";

interface ICounterState {
  count: number;
}

class Counter extends Component<{}, ICounterState> {
  // 初始化狀態，你可以將狀態視為組件的私有數據
  constructor(props: {}) {
    super(props);

    // 初始化狀態
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    // 更新狀態
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        {/* 顯示當前計數，用`this.state.狀態名稱`來訪問狀態 */}
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Add One</button>
      </div>
    );
  }
}

export default Counter;
