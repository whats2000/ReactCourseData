import { Component } from 'react'

import DisplayMessage from './components/DisplayMessage';
import ControlCounter from './components/ControlCounter';

interface IAppStates {
  count: number;
  message: string;
}

class App extends Component<{}, IAppStates> {
  state = {
    count: 0,
    message: '',
  };

  /**
   * 練習一：基本操作
   *  - 修改 `App.tsx` 組件，使其包含一個 `count` 狀態和一個 `changeCount` 、 `resetCount` 方法。
   *  - 其中 changeCount 方法會接收一個數字 `num`，並將 count 狀態增加或減少該數字。
   */
  changeCount = (num: number) => {
    // You code here

    // End of your code
  }

  resetCount = () => {
    // You code here

    // End of your code
  }

  /**
   * 練習二：擴展功能
   *  - 在 `App.tsx` 組件中加入一個新的狀態 `message`，並創建一個更新此狀態的方法 `updateMessage`。
   */
  updateMessage = (message: string) => {
    // You code here

    // End of your code
  }

  render() {
    return (
      <>
        <h1>Count: {this.state.count}</h1>
        <p>{this.state.message}</p>
        {/* You code here */}


        {/* End of your code */}
      </>
    );
  }
}

export default App
