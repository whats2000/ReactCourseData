# 第一章：React 函數組件基礎

## 1.1 函數組件介紹

### 1.1.1 什麼是函數組件

函數組件是使用 JavaScript 函數定義的 React 組件。與類別組件相比，函數組件通常更簡潔，且無需使用 `this` 關鍵字。

### 1.1.2 函數組件的優勢

- 簡潔性：
  - 函數組件更容易編寫和閱讀。
- 無狀態管理：
  - 函數組件本身無狀態，但可以通過 Hooks 管理狀態。
  - 在接下來的小節中，我們將介紹如何使用 `useState` Hook 管理狀態。
- 效能優勢：
  - 函數組件通常執行效率更高，因為它們不需要實例化和綁定 `this`。
  - 在編譯後，函數組件通常生成更少的程式碼。
- 未來趨勢：
  - 隨著 React Hooks 的引入，函數組件的應用越來越廣泛，並成為最佳實踐。
  - 在公司專案中，函數組件已經成為主流，並且在新的專案中優先使用。

### 1.1.3 與類別組件的對比

- 類別組件需要繼承自 `React.Component` 並使用 `render` 方法，而函數組件只需要返回 JSX。
- 類別組件有自己的狀態和生命週期方法，函數組件使用 Hooks 來管理狀態和生命週期。

```tsx
class HelloWorldClass extends React.Component {
  render() {
    return <h1>Hello, React!</h1>;
  }
}

const HelloWorld: React.FC = () => {
  return <h1>Hello, React!</h1>;
};
```
這兩個組件的功能相同，但是函數組件更為簡潔。

## 1.2 基本語法與使用

### 1.2.1 如何創建函數組件

函數組件是一個返回 JSX 的普通 JavaScript 函數。其類型為 `React.FC`，表示函數組件的類型。

```tsx
const MyComponent: React.FC = () => {
  return <div>這是一個函數組件</div>;
};
```

### 1.2.2 函數組件的 props 傳遞與使用

函數組件接收一個 `props` 參數，用於傳遞數據。這些數據可以在組件內部使用。

```tsx
interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};
```

還記得類別組件定義 `props` 的方式嗎？在函數組件中，我們直接在函數參數中定義 `props` 的類型。

### 1.2.3 與類別組件的對比

- 類別組件使用 `this.props` 訪問 props，而函數組件直接通過函數參數訪問 props。
- 函數組件的 props 更直觀，且無需處理 `this` 綁定問題。

### 1.2.4 練習題

創建一個函數組件 `Greeting`，接收 `name` 和 `age` 兩個 props 並顯示 "Hello, {name}! You are {age} years old."。

## 1.3 函數組件中的狀態管理

由於函數組件本身無狀態，因此需要使用 Hooks 來管理狀態。在接下來的小節中，我們將介紹如何使用 `useState` Hook 管理狀態。

### 1.3.1 何謂 Hook ?

所謂 Hook，是 React 16.8 版本引入的新特性，用於在函數組件中使用 React 的功能。Hook 可以讓你在函數組件中使用狀態、生命週期方法、上下文等 React 功能。這使得函數組件具有了類別組件的功能，並且更加簡潔和易於維護。

### 1.3.2 使用 `useState` 管理狀態

`useState` 是 React 提供的 Hook，用於在函數組件中管理狀態。

- `useState` 接收一個初始值，並返回一個包含狀態和更新狀態的陣列。
- 你可以用解構賦值的方式來獲取狀態和更新狀態的函數。
- 一般習慣命名為 `狀態名` 和 `set狀態名`。
- 其中 `set狀態名` 是一個函數，用於更新狀態。可接受
  - 一個新的狀態值
  - 一個函數，該函數接收當前狀態值並返回新的狀態值

```tsx
// 記得引入 useState Hook 自 React 套件
import React, { useState } from 'react';

const Counter: React.FC = () => {
  // 使用 useState 定義一個狀態 count，初始值為 0
  // 定義一個函數 setCount 用於更新 count 的值
  const [count, setCount] = useState(0);

  // 使用起來與類別組件中的 this.state 和 this.setState 類似
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

### 1.3.3 常見的狀態管理模式與範例

使用 `useState` 可以方便地在函數組件中管理狀態。例如，可以管理表單輸入、計數器等狀態。

- 例如，當用戶註冊帳號，設置密碼時，我們可以在用戶輸入時即時更新組件的狀態，並給與密碼強度的提示。

```tsx
import React, { useState } from 'react';

const PasswordStrength: React.FC = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const evaluateStrength = (pwd: string) => {
    if (pwd.length > 8) {
      setStrength('強');
    } else if (pwd.length > 5) {
      setStrength('中');
    } else {
      setStrength('弱');
    }
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          evaluateStrength(e.target.value);
        }}
      />
      <p>密碼強度: {strength}</p>
    </div>
  );
};
```

### 1.3.4 與類別組件的對比

- 類別組件使用 `this.state` 和 `this.setState` 管理狀態，而函數組件使用 `useState`。
- `useState` 更加簡潔，避免了類別組件中的 `this` 綁定問題。
- `this.setState` 有兩個參數，分別是新的狀態值和一個回調函數；而 `set狀態名` 可以接受一個新的狀態值或一個函數。
- `useState` 更鼓勵`state`分割，使程式碼更加模組化。

### 1.3.5 練習題

創建一個函數組件 `Counter`，該組件包含一個計數器，點擊按鈕計數器加 1。並創建一個相同功能的類別組件進行對比。
