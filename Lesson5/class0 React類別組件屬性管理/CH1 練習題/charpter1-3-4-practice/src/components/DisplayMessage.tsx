/**
 * 創建一個子組件 `DisplayMessage`，從父組件接收 `updateMessage` 方法。
 *  - 子組件中包含一個文本框和一個按鈕，用於修改 message 狀態。
 *  - 當用戶在文本框中輸入內容並點擊按鈕時，調用父組件的 `updateMessage` 方法，將文本框中的內容更新到 message 狀態中。
 */
import React, { Component } from 'react'

interface IDisplayMessageProps {
  // You code here

  // End of your code
}

interface IDisplayMessageStates {
  input: string;
}

class DisplayMessage extends Component<IDisplayMessageProps, IDisplayMessageStates> {
  state = {
    input: ''
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // You code here

    // End of your code
  }

  handleClick = () => {
    // You code here

    // End of your code
  }

  render() {
    return (
      <>
        <input type="text" value={this.state.input} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Update</button>
      </>
    );
  }
}

export default DisplayMessage;
