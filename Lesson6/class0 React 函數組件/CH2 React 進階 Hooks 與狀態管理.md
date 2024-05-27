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

