# 第一章：React 組件屬性基礎

## 1.1 `props` 的基本概念
在 React 中，組件之間的數據傳遞是通過 `props`（properties 的縮寫）實現的。`props` 是組件接收的外部數據，主要用於父組件向子組件傳遞信息。這些信息可以包括各種數據類型，如字符串、數字、對象、陣列甚至是其他組件。

組件 props 具有以下特點: 
- 唯讀性：`props` 是唯讀的，這意味著子組件不能修改接收到的 `props`。這個設計原則保證了組件之間的數據流是單向的，從而使應用的數據流更可預測、更容易理解。
- 由上到下傳遞：`props` 只能由上到下傳遞，即父組件可以向子組件傳遞 `props`，但子組件不能向父組件傳遞 `props`。這種單向數據流的設計有助於提高組件的可重用性和可維護性。
- 作用：`props` 提供了一種組件間通信的方式，使得組件可以保持狀態的封裝性，同時能夠接收外部環境提供的數據。

## 1.2 傳遞 `props`
在 TypeScript 中，通過接口（Interface）來定義 props 的類型是一個好習慣。這可以幫助開發者清晰地知道哪些 props 是必需的，它們的類型是什麼，以及哪些是可選的。

### 1.2.1 定義 props 類型
首先，我們定義一個接口來描述 props 的結構和類型
- 需要注意的是，接口名稱通常以 `I` 開頭，這是一種常見的命名慣例。
- 接口中的屬性名稱和類型與組件的 `props` 屬性相對應。
- 如果某個屬性是非必需的，可以在屬性名稱後面加上 `?` 符號。

```tsx
interface IUserProps {
  name: string;
  age: number;
  birthday?: string;
}
```
這個接口描述了一個 `User` 組件的 `props`包括 
- `name`（姓名）
- `age`（年齡）
- `birthday`（生日）
- 其中，`name` 和 `age` 是必需的，而 `birthday` 是可選的。

### 1.2.2 子組件接收 `props`

在子組件中，我們可以通過接口來定義 `props` 的類型，從而確保組件接收到的 `props` 符合預期的類型。
- 在 `<` 和 `>` 之間的第一個參數是 props 的類型，第二個參數是組件的 state 的類型。
- 在組件類中，我們可以通過 `this.props` 訪問 `props` 的屬性。

```tsx
import React from 'react';

interface IUserProps {
  name: string;
  age: number;
  birthday?: string;
}

class User extends React.Component<IUserProps> {
  render() {
    return (
      <div>
        <p>姓名：{this.props.name}</p>
        <p>年齡：{this.props.age}</p>
        {this.props.birthday && <p>生日：{this.props.birthday}</p>}
      </div>
    );
  }
}

export default User;
```

- 由於`this.props` 很多過於冗長，我們可以使用解構賦值的方式來簡化程式碼。
- 利用解構賦值，因為 `props` 是一個對象，我們可以直接從 `{}` 中取出對應的屬性，這樣程式碼會更加簡潔

```tsx
import React from 'react';

interface IUserProps {
  name: string;
  age: number;
  birthday?: string;
}

class User extends React.Component<IUserProps> {
  render() {
    const { name, age, birthday } = this.props;
    
    return (
      <div>
        <p>姓名：{name}</p>
        <p>年齡：{age}</p>
        {birthday && <p>生日：{birthday}</p>}
      </div>
    );
  }
}

export default User;
```

### 1.2.3 父組件傳遞 `props`

在父組件中，我們可以通過 JSX 的屬性來傳遞 `props` 給子組件。
- 使用方式近似於 HTML 的屬性，屬性名稱即為 `props` 的屬性名稱，屬性值即為要傳遞的數據。
- 如果 `props` 是一個對象，可以使用物件字面量的方式傳遞。

```tsx
import React from 'react';

import User from './User';

class App extends React.Component {
  render() {
    return (
      <>
        <User name="Alice" age={20} />
        <User name="Bob" age={25} birthday="1995-01-01" />
      </>
    );
  }
}

export default App;
```

## 1.3 練習
在這部分的練習中，我們將運用所學的關於 props 的知識來創建一個實際的組件互動。練習將包括定義 TypeScript 類型、創建父子組件和 props 的傳遞。

1. 定義一個名為 IProfileProps 的 TypeScript 接口，它應包含以下屬性：
   - firstName (string) - 必需
   - lastName (string) - 必需
   - email (string) - 可選
2. 創建一個名為 Profile 的子組件，它應該接收 IProfileProps 作為 props 類型。
   - 組件應渲染一個簡單的用戶資料卡，包括姓名和電子郵件。
   - 使用物件解構來接收 props。
3. 在 App 中為至少兩個 Profile 組件實例提供 props，其中一個包含電子郵件地址，一個不包含。