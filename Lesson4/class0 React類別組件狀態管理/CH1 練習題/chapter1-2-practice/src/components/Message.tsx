/**
 * 1. 創建一個名為`Message`的組件，並設置一個狀態`message`，初始值為`Hello, world!`。
 * 2. 在`Message`組件中，將狀態`message`的值渲染到`<h1>`標籤中。
 * 3. 擴展`Message`組件，使得每次點擊按鈕時，消息在“Hello, world!”和“Hello, React!”之間切換。
 * 4. 在狀態更新後，使用回調函數打印一條消息"狀態更新完成"與當前狀態。
 */
import { Component } from "react";

interface IState {
// Your code here

// End your code
}

class Message extends Component<{}, IState> {
  // Your code here

  // End your code

  handleClick = () => {
    // Your code here

    // End your code
  };

  render() {
    return (
      <>
        {/* Your code here */}

        {/* End your code */}
      </>
    );
  }
}

export default Message;