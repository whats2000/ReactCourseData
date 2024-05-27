# 第零章：React 易混淆概念

## 0.1 JSX 中的 `{}` 與 JavaScript 自身的 `{}` 的區別

很多學生在學習 React 時，常常混淆 JSX 中的 `{}` 與 JavaScript 自身的 `{}`。這裡我們來看看這兩者之間的區別。

### 0.1.1 JSX 中的 `{}`

在 JSX 中， `{}` 用於在類似 HTML 標籤中嵌入 JavaScript 插值表達式。例如：

#### Babel 編譯前的 JSX 語法

```tsx
interface CounterState {
  count: number;
}

class Counter extends React.Component<{}, CounterState> {
  state = { count: 0 };

  render() {
    return <div>{this.state.count}</div>;
  }
}
```

在這裡，`{}` 包裹的 `this.state.count` 是一個 JavaScript 插值表達式，其值將在渲染時被插入到 `div` 中。

#### Babel 編譯後的 JavaScript 語法

實際上，JSX 語法會被編譯成 JavaScript 語法。例如，編譯後的語法如下：

```javascript
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return React.createElement('div', null, this.state.count);
  }
}
```

這段編譯後的程式碼中，`React.createElement` 方法被用來創建 `div` 元素，其中插入了 `this.state.count` 的值。這說明了 JSX 中的 `{}` 用來嵌入 JavaScript 表達式，並將其值插入到 HTML 結構中。

### 0.1.2 JavaScript 中的 `{}`

在 JavaScript 自身中， `{}` 用於定義物件或物件字面量。

1. JavaScript 中物件除了可以使用 `new Object()` 來創建，還可以使用 `{}` 來創建。
2. 這種設計的歷史因素來自於 JavaScript 的設計初衷——提供一種簡單易用的語法來定義和操作物件。在早期的網頁開發中，JavaScript 被設計為一種輕量級的腳本語言，用於添加互動性和動態內容。為了簡化開發，設計者引入了物件字面量的語法 `{}`，使得開發者可以更快速地創建和操作物件，而不必像傳統的面向對象語言那樣，通過繁瑣的類定義和實例化步驟來創建物件。

例如：

```javascript
const state = { count: 0 };
```

這裡，`{}` 用於創建一個包含 `count` 屬性的物件。

### 物件字面量的設計初衷

物件字面量 `{}` 的設計初衷是為了簡化物件的創建和操作。在 JavaScript 的早期版本中，開發者通常需要頻繁地創建和修改物件。使用物件字面量可以使這一過程變得更加直觀和簡潔，這在處理動態和交互性強的網頁應用時尤為重要。

#### 早期 JavaScript 的物件創建方式

在 JavaScript 語言創立之初，創建物件的方式包括使用 `new Object()` 來創建：

```javascript
const state = new Object();
state.count = 0;
```

這種方法相對繁瑣，特別是在需要創建包含多個屬性的物件時。為了提高開發效率，引入了物件字面量語法：

```javascript
const state = { count: 0 };
```

這樣的語法不僅簡潔明了，還能直觀地展示物件的結構。即便後來 ES6 引入了類和模組等新的語言特性，物件字面量仍然是 JavaScript 中最常用的創建物件的方式之一。

### 常見錯誤

很多學生會混淆這兩種語法，寫出類似 `this.setState{count: count+1};` 的錯誤程式碼。

我們由以下步驟來解釋這個錯誤：
1. `this.setState` 是 JavaScript 中的函數，用於更新 React 組件的狀態。
2. 在調用 JavaScript 函數時，應該使用 `()` 而不是 `{}`。
3. 函數的參數是一個物件，因此應該使用 `{}` 來定義物件。

正確的寫法應該是：

```typescript
this.setState({ count: this.state.count + 1 });
```

等同於

```typescript
// 定義一個新的物件，包含 count 屬性，並將 count 的值設為 this.state.count + 1
const newState = { count: this.state.count + 1 };

// 調用 this.setState 函數，將新的狀態 newState 設定為組件的狀態
this.setState(newState);
```

這裡的 `{}` 是 JavaScript 用於創建物件的語法，而不是 JSX 的語法。理解這一點可以幫助你避免在編寫 React 組件時出現混淆和錯誤。

## 0.2 函數內定義箭頭函數與 JavaScript 的值傳遞方式

首先，你需要理解當函數後面加上`()`時，代表函數會立即執行。這是 JavaScript 的基本語法。

### 0.2.1 JavaScript 的值傳遞方式

#### 函數作為參數的值傳遞方式

大部分 JavaScript 是按值傳遞（by value）的。這意味著當你將一個變量傳遞給函數時，實際上傳遞的是這個變量的值，而不是變量本身。

然而，對於物件和陣列，傳遞的是它們的引用。這同樣適用於函數，當一個函數被傳遞作為另一個函數的參數時，傳遞的是函數的引用。

#### 函數參數的示例

對於函數參數，JavaScript 傳遞的是引用。例如：

```javascript
function increment(c) {
    c++;
}

let count = 1;
increment(count);
console.log(count); // 1，因為傳遞的是值的副本

function modify(fn) {
    fn();
}

function hello() {
    console.log('Hello');
}

modify(hello); // 'Hello'，因為傳遞的是函數引用
```

在這個例子中，當 `hello` 函數被傳遞給 `modify` 函數時，實際上傳遞的是 `hello` 函數的引用。因此，`modify` 函數內部可以正確調用 `hello` 函數。

### 0.2.2 常見錯誤

很多學生會在事件處理器中直接調用函數，例如：

```jsx
<button onClick={this.handleCounterIncreaseOne()}/>
```

這是錯誤的，因為這樣會立即執行函數並將返回值（如果有的話）傳遞給 `onClick`。正確的做法應該是：

```jsx
<button onClick={this.handleCounterIncreaseOne}/>
```

這樣會在點擊按鈕時才執行函數。

#### 為什麼 `() => handleCounterIncreaseOne()` 也是可行的

除了直接傳遞函數引用，你還可以使用箭頭函數來包裹函數調用。

這種方式也是可行的，因為它創建了一個新的匿名函數，該函數在點擊按鈕時被調用，然後調用 `this.handleCounterIncreaseOne()`。

注意到了嗎? 點擊按鈕時，才調用函數。

這樣做的好處是可以傳遞參數給處理函數，例如：

```jsx
<button onClick={() => this.handleCounterIncrease(5)}/>
```

這會在按鈕點擊時調用 `this.handleCounterIncrease`，並傳遞 `5` 作為參數。這種模式在需要傳遞參數或需要執行更多邏輯時非常有用。

等同於

```jsx
const clickHandler = () => this.handleCounterIncrease(5);

<button onClick={clickHandler}/>
```

注意到了嗎? `onClick` 事件處理器接收的是一個函數引用，而不是函數調用。

### 0.2.3 Babel 編譯過程中的差異

我們可以通過 Babel 的編譯過程來更清楚地理解這些差異。Babel 是一個 JavaScript 編譯器，它可以將 JSX 和現代 JavaScript 語法轉換成瀏覽器可執行的舊版 JavaScript。

#### JSX 與 JavaScript 編譯

考慮以下 JSX 代碼：

```jsx
<button onClick={this.handleCounterIncreaseOne}/>
```

經 Babel 編譯後，轉換為 JavaScript：

```javascript
React.createElement("button", { onClick: this.handleCounterIncreaseOne });
```

在這裡，`onClick` 屬性的值是 `this.handleCounterIncreaseOne`，這是一個函數引用。這樣，只有在按鈕被點擊時，函數才會被調用。

**結論，是如果你是做事件處理，你應該傳遞函數引用，而不是函數調用。**

## 0.3 解構賦值

### 0.3.1 基本概念

解構賦值是一種從數組或物件中提取值的語法。對於物件，解構賦值可以讓你輕鬆提取屬性並賦值給變量。例如：

```javascript
const user = {name: 'Alice', age: 25};
const {name, age} = user;
console.log(name); // 'Alice'
console.log(age); // 25
```

### 0.3.2 常見錯誤

學生可能會混淆解構賦值的語法，尤其是在物件和陣列之間。這裡有一個常見的錯誤：

```javascript
const user = {name: 'Alice', age: 25};
// const [name, age] = user; // 你不能用陣列解構物件
```

一個重要要點，如果你用大括號 `{}` 包裹，代表你要解構物件，如果你用中括號 `[]` 包裹，代表你要解構陣列。

亦即用甚麼定義，就用甚麼解構。

```tsx
const user = {name: 'Alice', age: 25};
const {name, age} = user; // 解構物件

const arr = [1, 2, 3];
const [a, b, c] = arr; // 解構陣列
```

## 0.4 組件使用

### 0.4.1 基本用法

React 組件可以像 HTML 標籤一樣使用，並且可以傳遞 `props`

- 但是不論如何，組件名稱必須大寫開頭，不然編譯器會報錯。

```tsx
<Greeting name="Alice" age={25}/>
```

### 0.4.2 常見錯誤

學生可能會混淆組件與 HTML 標籤，忘記大寫組件名稱。例如：

```jsx
<greeting name="Alice" age={25}/> // 錯誤，編譯器會當成普通 HTML 標籤
```

```jsx
<Greeting name="Alice" age={25}/> // 正確
```

## 0.5 `this.setState` 用法與 `this.props` 用法

### 0.5.1 `this.setState` 用法

在類別組件中，`this.setState` 用於更新狀態。它接受一個物件或一個函數作為參數

- `this.setState` 是一個屬於該組建的函數，用於更新組件的狀態。(定義在 Component 類別中，然後被繼承)
- 因使使用當作函數調用，所以應該使用 `()` 而不是 `{}`

```javascript
this.setState({count: this.state.count + 1});
```

分析：
- 我們調用 `this.setState` 函數，並傳遞一個**物件** `{count: this.state.count + 1}` 作為參數。
- 這個物件包含一個 `count` 屬性，其值為 `this.state.count + 1`。

或者：

```javascript
this.setState((prevState) => { return {count: prevState.count + 1}; });
```

分析：
- 我們調用 `this.setState` 函數，並傳遞一個**函數引用** `(prevState) => { return {count: prevState.count + 1}; }` 作為參數。
- 這個參數引用了一個函數，而該函數是接受一個 `prevState` 參數，返回一個物件 `{count: prevState.count + 1}`。

### 0.5.2 `this.props` 用法

`this.props` 用於訪問傳遞給組件的屬性。例如：

```tsx
interface GreetingProps {
    name: string;
}

class Greeting extends React.Component<GreetingProps> {
    render() {
        return <div>Hello, {this.props.name}!</div>;
    }
}
```

### 0.5.3 常見錯誤

學生經常會忘記第一個參數是一個物件或函數，而不是一個值。例如：

```javascript
this.setState(count: this.state.count + 1); // 錯誤，應該使用 {count: this.state.count + 1}
```

```javascript
this.setState({count: this.state.count + 1}); // 正確
```
