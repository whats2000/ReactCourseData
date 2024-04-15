# 第一章：類別組件狀態基礎

## 1.1 組件的狀態概述

React組件的狀態允許我們在組件內部管理可變數據。這些數據的變更能觸發組件的重新渲染，從而更新用戶界面。狀態在React的類別組件中尤為重要，因為它們直接管理著組件的內部狀態和行為。

### 1.1.1 組件狀態的核心概念：

- 類別組件的狀態：
    - 傳統上，只有類別組件能夠管理狀態，因為它們繼承自`React.Component`，這提供了狀態管理的功能。
- 函數型組件和Hooks：
    - 隨著React的發展，函數型組件也可以通過Hooks（如`useState`）來使用狀態。
    - 這部分將在後續課程中詳細介紹。
- 狀態與UI的交互：
    - 狀態的變更會導致組件的重新渲染，這是因為狀態通常與UI密切相關，任何狀態的變更都可能影響渲染輸出。
    - 當該變數需在變更時，使組件重新渲染的變數時，就應該使用狀態。

### 1.1.2 示例：基本計數器組件

以下是一個簡單組件，它包含一個計數器和一個按鈕，點擊按鈕時計數器會增加。

```tsx
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
```

### 1.1.3 React與其他框架的對比：

- 與Vue的不同：
  - 不像Vue那樣使用自動依賴跟蹤系統來實現響應式數據，React使用的是基於狀態變更的顯式重新渲染方法。
  - 這種方法需要開發者顯式調用`setState`
    來更新狀態，進而觸發UI的更新。
- 性能考慮： 
  - React的這種設計有助於避免不必要的依賴跟蹤和深層次的性能問題，因為它只重新渲染真正依賴於變更狀態的組件。

## 1.2 狀態的定義和初始化

在React類別組件中，狀態是通過`this.state`這個特殊的屬性來定義的。通常，狀態的初始化會在組件的構造函數（`constructor`）中進行。

### 練習題：

**創建一個名為`Message`的組件，它顯示一個消息，該消息可以通過點擊按鈕來改變。**

```jsx
class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello, world!"
        };
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.changeMessage}>Change Message</button>
            </div>
        );
    }

    changeMessage = () => {
        this.setState({message: "Hello, React!"});
    }
}
```

## 3. 狀態的更新

狀態的更新必須通過`this.setState()`方法來進行。這個方法接受一個新的狀態對象，並將其合併到當前狀態中，然後重新渲染組件。

### 練習題：

**擴展`Message`組件，使得每次點擊按鈕時，消息在“Hello, world!”和“Hello, React!”之間切換。**

```jsx
class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello, world!"
        };
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.toggleMessage}>Toggle Message</button>
            </div>
        );
    }

    toggleMessage = () => {
        const newMessage = this.state.message === "Hello, world!" ? "Hello, React!" : "Hello, world!";
        this.setState({message: newMessage});
    }
}
```