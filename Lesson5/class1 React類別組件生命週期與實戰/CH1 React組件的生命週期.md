# 第一章：組件的生命週期

## 1.1 理解生命週期

還記得之前講述的這張圖片嗎?

![React 組件生命週期](images/how.png)

### 1.1.1 什麼是生命週期？

React 組件的生命週期是指組件在不同階段的行為和方法，這些階段包括：

- 掛載階段：
  - 組件第一次在 DOM 中渲染的過程，涉及構造函數、`render` 方法
  - 方法 `componentDidMount` 的執行。
- 更新階段：
  - 組件在接收到新的 props 或 state 變化時進行更新
  - 涉及 `shouldComponentUpdate`、`componentDidUpdate` 的執行。
- 卸載階段：
  - 組件從 DOM 中移除之前的階段
  - 涉及 `componentWillUnmount` 方法的執行。

### 1.1.2 為什麼需要生命週期？

React 組件的生命週期提供了一個結構化的方式來管理組件的行為和狀態。通過生命週期方法，我們可以在不同階段執行特定的操作，比如初始化數據、設置定時器、註冊事件監聽器等。

## 1.2 掛載階段 `Mounting`

### 1.2.1 `componentDidMount` 方法

如同之前所述，`componentDidMount` 是在組件第一次渲染完成後執行的方法。這個方法通常用於執行一些初始化操作。

使用場景：
- 請求數據
- 設置定時器
- 註冊事件監聽器

### 1.2.2 實際應用

在 React 中，我們可以在 `componentDidMount` 方法中發送請求，並將數據保存到組件的狀態中。這樣可以確保數據在組件渲染之前已經準備好。

```tsx
interface IUser {
  id: number;
  name: string;
}

interface IUserListState {
  users: IUser[];
}

class UserList extends React.Component<{}, IUserListState> {
  state = {
    users: []
  };

  componentDidMount() {
    fetch('https://api.example.com/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data }));
  }

  render() {
    return (
      <div>
        {this.state.users.map(user => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    );
  }
}
```

在這個例子中，我們在 `componentDidMount` 方法中發送了一個請求，並將獲取的用戶數據保存到組件的狀態中。這樣可以確保數據在組件渲染之前已經準備好。

### 1.2.3 注意事項

- `componentDidMount` 方法只會在組件第一次渲染完成後執行一次。也就是掛載階段只會執行一次。除非組件被卸載再重新掛載。
- 如果需要在組件更新時執行一些操作，要使用 `componentDidUpdate` 方法。

### 1.2.4 練習

我們實際操作中山大學選課系統資料，透過 API 取得課程資料，並顯示在畫面上。

- 取得 112 學年度第 2 學期的課程資料第一頁
- 將課程名稱(`name`)、學分(`credit`)、老師(`teacher`)、教室(`room`) 顯示在畫面上。
- 架構是一個 `CourseList` 組件，裡面包含多個 `Course` 組件。
- [https://whats2000.github.io/NSYSUCourseAPI/1122/20240517_101137/page_1.json](https://whats2000.github.io/NSYSUCourseAPI/1122/20240517_101137/page_1.json)
- 以上位置若找不到變更，請自行修改替換 `20240517_101137` 成可用日期。查看當前最新時間：[https://whats2000.github.io/NSYSUCourseAPI/1122/version.json](https://whats2000.github.io/NSYSUCourseAPI/1122/version.json)

## 1.3 更新階段 `Updating`

### 1.3.1 `componentDidUpdate` 方法

`componentDidUpdate` 是在組件更新後立即調用的方法。

- 它提供了一個機會來執行操作，這些操作可能依賴於組件最近渲染的 DOM。

使用場景：
- 適合用於處理組件依賴的外部資源
- 延遲的第三方庫集成，如圖表或地圖庫。
- 篩選器或搜索框的狀態改變後，依據新的搜尋結果重新設置顯示的數據。

包含三個參數：`prevProps`、`prevState`、`snapshot`。
- `prevProps`：表示更新前的 props。
- `prevState`：表示更新前的 state。
- `snapshot`：這個我們不會在這個課程中使用到。

### 1.3.2 實際應用

可以利用更新後的 prop 或 state 來執行邏輯，比如對比前後兩次的 prop 值，並根據變化來執行特定的操作。

```tsx
interface IProfileProps {
  userID: number;
}

interface IUserData {
  id: number;
  name: string;
  email: string;
}

interface IProfileState {
  userData: IUserData | null;
}

class Profile extends React.Component<IProfileProps, IProfileState> {
  state = {
    userData: null
  };

  componentDidMount() {
    this.fetchUserData(this.props.userID);
  }

  componentDidUpdate(prevProps: IProfileProps) {
    if (this.props.userID !== prevProps.userID) {
      this.fetchUserData(this.props.userID);
    }
  }

  fetchUserData(userID: number) {
    fetch(`https://api.example.com/users/${userID}`)
      .then(response => response.json())
      .then(data => this.setState({ userData: data }));
  }

  render() {
    return (
      <div>
        {this.state.userData ? (
          <div>
            <h1>{this.state.userData.name}</h1>
            <p>{this.state.userData.email}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}
```

此例中，若 `userID` prop 發生變化，組件將會重新從 API 獲取新的用戶數據。

### 1.3.3 注意事項

- `componentDidUpdate` 方法會在組件更新後立即調用，但是不會在組件第一次渲染時調用。
- 在 `componentDidUpdate` 方法中，可以訪問 `this.props` 和 `this.state` 的值，並比較它們與更新前的值。
- **請注意**：在 `componentDidUpdate` 方法中，如果需要更新 state，由於會觸發組件重新渲染，而這又會觸發 `componentDidUpdate` 方法，因此必須謹慎使用，以避免無限循環。
  - 使用時 **必須** 搭配條件判斷，避免無限循環。
  - 例如：`if (this.props.userID !== prevProps.userID) { // 含有 setState 操作 }`
  - 這樣可以確保只有在 `userID` 發生變化時才會觸發 `setState` 操作。

### 1.3.4 練習題

假設你正在開發一個用戶資訊管理系統，需要實現一個功能：當用戶資訊更新時，系統會自動檢查並更新用戶的積分等級。每當用戶的消費紀錄發生變化時，用戶的積分等級可能會提升或下降。你的任務是使用 `componentDidUpdate` 方法來實現這一功能。

#### 題目要求
1. 創建一個 `UserComponent` 類組件，其中包含用戶的姓名、消費總額和積分等級。
2. 利用 `componentDidUpdate` 方法，每當用戶的消費總額發生變化時，根據以下規則更新積分等級：
   - 消費總額小於 1000 元，積分等級為 "Bronze"
   - 消費總額在 1000 至 5000 元之間，積分等級為 "Silver"
   - 消費總

額超過 5000 元，積分等級為 "Gold"
3. 在組件中添加按鈕，每點擊一次按鈕，消費總額增加 500 元。

## 1.4 卸載階段 `Unmounting`

### 1.4.1 `componentWillUnmount` 方法

`componentWillUnmount` 是在組件即將從 DOM 中卸載和銷毀前調用。
- 它允許你執行必要的清理操作，這些操作通常是必要的，比如取消網絡請求、移除事件監聽器、取消任何的事件監聽器或無效的計時器。

使用場景：
- 取消網絡請求
- 移除事件監聽器
- 取消定時器

### 1.4.2 實際應用

在 `componentWillUnmount` 方法中，可以執行一些清理操作，比如取消網絡請求、移除事件監聽器等。

```tsx
class Timer extends React.Component {
  timerID: number;

  componentDidMount() {
    this.timerID = window.setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerID);
  }

  tick() {
    // 更新 state
  }

  render() {
    return <div>{/* Timer */}</div>;
  }
}
```

在這個例子中，我們在 `componentDidMount` 方法中設置了一個定時器，並在 `componentWillUnmount` 方法中清除了定時器。這樣可以確保在組件卸載時，定時器被正確地清除。

### 1.4.3 注意事項

- `componentWillUnmount` 方法會在組件從 DOM 中卸載和銷毀前調用。
- 在 `componentWillUnmount` 方法中，可以執行一些清理操作，比如取消網絡請求、移除事件監聽器等。
- **請注意**：在 `componentWillUnmount` 方法中，應該避免執行任何與組件狀態或 DOM 相關的操作，因為組件即將被卸載，這些操作將不再有效。

### 1.4.4 練習題

假設你正在開發一個應用程式，其中包含一個用於顯示即時消息通知的組件。該組件需要訂閱一個消息服務，以接收和顯示新消息。當組件卸載時，需要確保取消訂閱以避免記憶體回收問題和潛在的錯誤。

- **題目要求**：
  1. 創建一個 `Notifications` 類組件，該組件在掛載時訂閱消息，並在卸載時取消訂閱。
  2. 使用 `componentDidMount` 方法來訂閱消息服務。
  3. 使用 `componentWillUnmount` 方法來取消訂閱消息服務。
  4. 在組件中顯示接收到的消息。
