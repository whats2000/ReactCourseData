# 引入JSX和Babel

在React開發過程中，我們經常會遇到JSX語法。JSX是一種看起來很像XML的JavaScript語法擴展。它允許開發者在JavaScript代碼中寫標記語言，從而創建React元素，這樣做可以讓你的代碼更加直觀和易於理解。

#### Babel簡介

為了使瀏覽器能夠理解JSX，我們需要使用Babel進行轉譯。Babel是一個廣泛使用的工具，它可以將JSX和ES6（甚至更高版本的ES標準）代碼轉換成兼容絕大多數瀏覽器的JavaScript代碼。

這是 Babel

![Meme](images/Babel%20Meme.png)

#### JSX的優勢

- **直觀**：JSX的語法更接近於HTML，使得構建UI變得更直觀。
- **表達力強**：在JSX中，你可以輕鬆地混合HTML標記和JavaScript邏輯，從而提高開發效率。
- **錯誤提示**：使用JSX時，編譯過程可以捕捉到更多潛在的錯誤，幫助開發者提前發現並修正問題。

#### 使用JSX的基本用法

要在React中使用JSX，你首先需要確保你的開發環境支持Babel轉譯。這通常在React的開發環境已經配置好了。
在這邊我們將使用手動引用Babel：

```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

一個基本的JSX示例看起來可能是這樣的：

```jsx
const element = <h1>Hello, world!</h1>;
```

這行代碼定義了一個常量`element`，它使用JSX描述了一個`<h1>`標籤。這段JSX會被Babel轉譯為以下JavaScript代碼：

```javascript
const element = React.createElement(
  'h1',
  null,
  'Hello, world!'
);
```

如果你的HTML需要換行，你可以使用括號包裹起來，如下：

```jsx
const element = (
  <h1>
    Hello, world!
  </h1>
);
```

#### 在JSX中使用註解

與 HTML 不同，JSX 中的註解是以 `{/* */}` 的形式存在的。如下：

```jsx
const element = (
  <h1>
    {/* 這是一個註解 */}
    Hello, world!
  </h1>
);
```
