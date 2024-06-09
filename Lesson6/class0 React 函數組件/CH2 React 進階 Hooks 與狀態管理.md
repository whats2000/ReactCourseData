# 第二章：React 進階 Hooks 與狀態管理

## 2.1 使用 `useEffect` 處理副作用

在前面的章節中，我們學習了類別組件的生命週期方法，如

- `componentDidMount`：組件掛載後執行
- `componentDidUpdate`：組件更新後執行
- `componentWillUnmount`：組件卸載前執行

這些方法用於在組件的不同階段執行特定的邏輯，如資料載入、更新和清理。

然而，函數組件沒有這些內建的生命週期方法，取而代之的是使用 `useEffect` 來實現相同的功能。

### 2.1.1 `useEffect` 基本用法

`useEffect` 是一個用於在函數組件中處理副作用的 Hook。

- 副作用指的是那些不直接產生渲染結果但對應用程式有影響的操作，例如資料獲取、訂閱和手動修改 DOM 等。
- 其函數簽名為 `useEffect(effect: EffectCallback, deps?: DependencyList)`。
    - `effect` 是一個函數引用，用於處理副作用。
    - `deps` 是一個依賴陣列，用於控制 `effect` 的執行時機。

### 2.1.2 `useEffect` 實現掛載階段

- 相當於 `componentDidMount`。`useEffect` 會在組件首次渲染後執行。
- 將`useEffect`的第二個參數設為空陣列，表示只在組件掛載和卸載時執行一次。

```tsx
import React, { useState, useEffect } from 'react';

const DataFetcher: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(
    // 參數一：副作用函數引用
    () => {
      // 資料載入
      fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => setData(data));
    },
    // 參數二：依賴陣列
    [] // 空依賴陣列表示只在組件掛載和卸載時執行一次
  ); 

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.value}</div>
      ))}
    </div>
  );
};
```

### 2.1.3 `useEffect` 實現更新階段：

- 相當於 `componentDidUpdate`。當依賴項改變時，`useEffect` 會重新執行。
- `useEffect` 的第二個參數是一個依賴陣列，當陣列中的變數改變時，`useEffect` 會重新執行。

```tsx
import React, { useState, useEffect } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(
    // 參數一：副作用函數引用
    () => {
      console.log(`Count has changed to ${count}`);
    },
    // 參數二：依賴陣列
    [count] // 依賴 count，當 count 變化時重新執行
  );

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

### 2.1.4 `useEffect` 實現卸載階段：

- 相當於 `componentWillUnmount`。`useEffect` 可以返回一個清理函數引用，在組件卸載或重新執行前調用。
- 清理函數可以用於取消訂閱、清理定時器等操作。
- 如果 `useEffect` 的第二個參數是空陣列，則清理函數只會在組件卸載時執行。

```tsx
import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
  const [time, setTime] = useState(0);

  useEffect(
    // 參數一：副作用函數引用
    () => {
      // 這邊定義了一個掛載後執行的定時器
      const timer = setInterval(() => {
        setTime(time => time + 1);
      }, 1000);

      // 清理函數
      return () => {
        clearInterval(timer);
      };
    },
    // 參數二：依賴陣列
    [] // 空依賴陣列表示只在組件掛載和卸載時執行一次
  );

  return <div>Time: {time}</div>;
};
```

### 2.1.5 練習題

嘗試把之前的程式碼改成使用 `useEffect` 的形式的函數組件。

我們實際操作中山大學選課系統資料，透過 API 取得課程資料，並顯示在畫面上。

- 取得 112 學年度第 2 學期的課程資料第一頁
- 將課程名稱(`name`)、學分(`credit`)、老師(`teacher`)、教室(`room`) 顯示在畫面上。
- 架構是一個 `CourseList` 組件，裡面包含多個 `Course` 組件。
- [https://whats2000.github.io/NSYSUCourseAPI/1122/20240517_101137/page_1.json](https://whats2000.github.io/NSYSUCourseAPI/1122/20240517_101137/page_1.json)
- 以上位置若找不到變更，請自行修改替換 `20240517_101137` 成可用日期。查看當前最新時間：[https://whats2000.github.io/NSYSUCourseAPI/1122/version.json](https://whats2000.github.io/NSYSUCourseAPI/1122/version.json)

## 2.2 使用 `useContext` 與全域狀態管理

### 2.2.1 什麼是 Context

在 React 應用中，我們經常需要在多個組件之間共享一些狀態，例如主題、認證信息或語言設置等。Context 提供了一種無需在每一層手動傳遞 props 的方式來共享這些狀態。

Context 通常包括兩個部分：
- Context Provider：提供狀態的組件。
- Context Consumer：使用狀態的組件。

```tsx
import React from 'react';

// 創建一個 Context
const ThemeContext = React.createContext('light');

const App: React.FC = () => {
  return (
    // 使用 Provider 提供狀態
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

const Toolbar: React.FC = () => {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

const ThemedButton: React.FC = () => {
  // 使用 Consumer 獲取狀態
  return (
    <ThemeContext.Consumer>
      {theme => <button className={theme}>Button</button>}
    </ThemeContext.Consumer>
  );
}
```

在上面的範例中，我們創建了一個 `ThemeContext`，並使用 `ThemeContext.Provider` 提供了一個主題狀態。`ThemedButton` 組件通過 `ThemeContext.Consumer` 獲取並使用這個主題狀態。

### 2.2.2 使用 `useContext` 管理全域狀態

`useContext` 是 React 提供的 Hook，用於在函數組件中更方便地使用 Context。`useContext` 接受一個 Context 對象（由 `React.createContext` 創建），並返回該 Context 的當前值。

```tsx
import React, { useContext } from 'react';

// 創建一個 Context
const ThemeContext = React.createContext('light');

const App: React.FC = () => {
  return (
    // 使用 Provider 提供狀態
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

const Toolbar: React.FC = () => {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

const ThemedButton: React.FC = () => {
  // 使用 useContext Hook 獲取狀態
  const theme = useContext(ThemeContext);
  return <button className={theme}>Button</button>;
}
```

在這個範例中，我們使用 `useContext` Hook 來獲取 `ThemeContext` 的當前值，這樣我們就不需要使用 `Context.Consumer` 組件，代碼更加簡潔。

### 2.2.3 使用範例：全域認證狀態管理

在實際應用中，我們經常需要在多個組件之間共享認證信息。下面是一個使用 `useContext` 管理全域認證狀態的範例。

```tsx
import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  user: string | null;
  login: (user: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  const login = (user: string) => setUser(user);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const LoginButton: React.FC = () => {
  const auth = useContext(AuthContext);
  if (!auth) {
    throw new Error('useContext must be used within a AuthProvider');
  }
  
  return auth.user ? (
    <button onClick={auth.logout}>Logout</button>
  ) : (
    <button onClick={() => auth.login('User')}>Login</button>
  );
};

const UserProfile: React.FC = () => {
  const auth = useContext(AuthContext);
  if (!auth) {
    throw new Error('useContext must be used within a AuthProvider');
  }

  return <div>{auth.user ? `Hello, ${auth.user}` : 'You are not logged in.'}</div>;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <UserProfile />
      <LoginButton />
    </AuthProvider>
  );
};
```

在這個範例中，我們創建了一個 `AuthContext`，並使用 `AuthProvider` 組件提供認證狀態。`LoginButton` 和 `UserProfile` 組件通過 `useContext` 獲取並使用這個狀態。

### 2.2.4 練習題

創建一個簡單的主題切換應用：
1. 創建一個 `ThemeContext`，包含主題顏色和切換主題的函數。
2. 使用 `ThemeContext.Provider` 提供當前主題和切換主題的函數。
3. 創建一個按鈕，點擊後切換主題顏色。
4. 使用 `useContext` 獲取當前主題並應用到樣式上。
