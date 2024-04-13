# 第一章：在JSX中使用條件表達式

在React開發中，我們經常需要根據某些條件動態顯示或隱藏元素。這一章將介紹如何在JSX中有效地使用條件表達式。

## 1.1 使用三元運算符

三元運算符是在JSX中進行條件渲染的最常見方法之一，其語法為`條件 ? 表達式1 : 表達式2`。

### 示例分析
```jsx
const isLoggedIn = true;
return (
  <div>
    {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
  </div>
);
```

### 練習題
1. 創建一個變量`score`，並根據`score`的值在頁面上顯示"Pass"（60分以上）或"Fail"。

## 1.2 使用邏輯與(`&&`)運算符

當你只需要在某個條件為真時渲染元素，可以使用邏輯與(`&&`)運算符。

### 示例分析
```jsx
const isLoading = false;
return (
  <div>
    {isLoading && <p>Loading...</p>}
  </div>
);
```

### 練習題
1. 創建一個變量`messages`，它是一個包含消息的數組。如果`messages`有元素，則在頁面上渲染"你有未讀消息"。
