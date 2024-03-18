# 第二章：在JSX中映射列表

顯示列表數據是React應用中的一個常見需求。這一章節將介紹如何使用`.map()`方法在JSX中渲染列表數據。

## 2.1 使用`.map()`渲染列表

`.map()`方法可以遍歷陣列並返回一個新的陣列，我們可以利用它來動態生成JSX元素列表。
- 還在大括號中可以放入任何有效的陣列，甚至可以是以JSX元素的陣列，這也是為什麼我們可以在 JSX 中使用 `.map()` 方法的原因。 
- 此外，`map` 的 callback 函數會接收三個參數：`currentValue`、`index`、`array`。
- 其中我們很常用到的是 `currentValue` 和 `index`。

### 示例分析
```jsx
const fruits = ['Apple', 'Banana', 'Cherry'];
return (
  <ul>
    {fruits.map(fruit => <li key={fruit}>{fruit}</li>)}
  </ul>
);
```

### 練習題
1. 創建一個包含多個對象的陣列`users`，每個對象包含`id`和`name`。使用`.map()`在頁面上為每個用戶渲染一個列表項目。

## 2.2 鍵（Key）的重要性

當在React中渲染列表時，每個列表項目都應該有一個獨特的`key`屬性。這有助於React識別哪些項目改變了，從而提高渲染效率。
- 基本上你忘記添加`key`屬性，React會發出警告，但不會影響應用的運行。

### 示例分析
```jsx
const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
return (
  <ul>
    {users.map(user => <li key={user.id}>{user.name}</li>)}
  </ul>
);
```

### 練習題
1. 給定一個陣列`tasks`，每個元素包含一個`task`字符串。渲染一個任務列表，並確保每個列表項目都有一個獨特的`key`。
