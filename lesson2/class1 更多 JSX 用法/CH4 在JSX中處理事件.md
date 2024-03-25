# 第四章：在JSX中處理事件

React使事件處理變得簡單且一致，通過對事件的合成包裝，提供了跨瀏覽器的一致性。在JSX中處理事件與處理普通HTML中的事件類似，但有一些React特定的差異和最佳實踐。

## 4.1 為元素添加事件處理器

在JSX中，可以為元素添加各種事件處理器，如`onClick`、`onChange`等。事件處理器命名採用camelCase標記法，而且你通常會將事件處理邏輯定義為函數或箭頭函數。

### 示例分析

```jsx
const handleClick = () => {
  alert('Button clicked!');
};

const button = <button onClick={handleClick}>Click me</button>;
```

在這個示例中，我們為一個按鈕添加了`onClick`事件處理器。當按鈕被點擊時，會調用`handleClick`函數，彈出一個對話框。這種方法簡潔且易於理解，特別適合React初學者。

### 練習題

為一個`<div>`元素添加一個`onMouseOver`事件處理器，當鼠標懸停在該元素上時，顯示一條消息到控制台。

## 4.2 使用事件對象

在事件處理函數中，React會傳遞一個合成事件對象，這與DOM事件的行為相似。你可以使用這個事件對象來獲取關於事件的更多信息，比如觸發事件的元素、事件類型等。

### 示例分析

```jsx
const handleChange = (event) => {
  console.log(event.target.value);
};

const inputArea = <input type="text" onChange={handleChange}/>;
```

在這個示例中，我們演示了如何在`<input>`元素上使用`onChange`事件處理器來處理文字輸入。每次用戶輸入時，都會調用`handleChange`函數，並將輸入的文字打印到控制台。這種方式為開發者提供了一種靈活的方法來處理用戶輸入。

對於使用TypeScript的開發者來說，可以明確地指定事件對象的類型，從而獲得更好的類型檢查和自動完成功能。

```tsx
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.value);
};

const inputArea = <input type="text" onChange={handleChange}/>;
```

### 練習題

1. 新增一個input元素，我們將使用事件對象`event`來監聽input元素的`onChange`事件。
2. 為`<form>`添加`onSubmit`事件處理器。在事件處理函數中，阻止表單的默認提交行為，並打印出一個input元素的值。
