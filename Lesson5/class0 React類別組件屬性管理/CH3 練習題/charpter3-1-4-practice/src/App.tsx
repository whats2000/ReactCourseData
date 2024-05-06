import { Component } from 'react'

import { User } from "./types/User";
import UserProfile from "./components/UserProfile.tsx";

// 補充說明：這裡的 `User` 介面定義在 `types/User.d.ts` 檔案中，這樣就能在整個專案中使用 `User` 介面
interface IAppStates {
  users: User[];
}

class App extends Component<{}, IAppStates> {
  state: IAppStates = {
    users: [
      { name: "Tom", age: 25, location: "Taipei" },
      { name: "John", age: 30, location: "New York" },
      { name: "Ken", age: 35, location: "Tokyo" }
    ]
  };

  /**
   * 隨機選取一個 user，並將該 user 的 age 設定為 0 ~ 99 之間的亂數
   * 進階題，做完基本題可以挑戰這題
   */
  randomizeOneUserAge = () => {
    // Your code here
    // 隨機選取一個 user 的 index


    // 複製一份新的 users 陣列


    // 將隨機選取的 user 的 age 設定為 0 ~ 99 之間的亂數


    // 更新 users 陣列

    // End of your code
  }

  render() {
    /**
     * 使用展開運算符將每個使用者的信息從 `App` 傳遞給 `UserProfile` 組件
     * 請記住，`UserProfile` 接收的是單個使用者的信息，而不是整個使用者列表
     * 你應該在這裡使用甚麼方法？
     */
    return (
      <>
        {/* Your code here */}
        {

        }
        {/* End of your code */}
        <button onClick={this.randomizeOneUserAge}>Randomize One User Age</button>
      </>
    );
  }
}

export default App;
