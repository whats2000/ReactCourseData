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

以下是一個在 TypeScript 中定義的計數器組件：

```tsx
interface IState {
  count: number;
}

class Counter extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    // 初始化狀態，你可以將狀態視為組件的私有數據
    this.state = {
      count: 0
    };
  }

  increment = () => {
    // 更新狀態
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div>
        {/* 顯示當前計數，用`this.state.狀態名稱`來訪問狀態 */}
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Add One</button>
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

### 練習題：

試試這個計數器組件，點擊按鈕時，計數器的數字會增加。並嘗試修改組件的狀態，看看組件的行為有什麼變化。

## 1.2 狀態的定義和初始化

在React類別組件中，在Typescript中使用狀態時，通常遵循以下兩個步驟：

1. 定義狀態類型：
    - 首先，我們在組件內部定義狀態的類型，以增強代碼的可讀性和可維護性。
    - 通常，我們會在組件類別的定義中添加一個狀態類型的接口。
       ```tsx
       interface IState {
         狀態名稱: 狀態類型;
       }
       ```
2. 初始化狀態：

   - 在組件的構造函數中初始化狀態。這是設置組件初始狀態的地方。
   - 繼承自`Component`的類別組件，需要使用`<`和`>`來指定狀態的類型。
   - 在`<>`中，第一格參數是props的類型，第二個參數是狀態的類型。下方示例中props的類型是`{}`，狀態的類型是`IState`。
   - props會在後面的章節中介紹。

      ```tsx
      class MyComponent extends Component<{}, IState> {
        constructor(props: any) {
          super(props);
          this.state = {
            狀態名稱: 初始值  // 初始狀態值
          };
        }
      }
      ```

    - 當然有ES7的寫法，可以直接在類別中定義狀態，不用在構造函數中定義。
    
      ```tsx
      class MyComponent extends Component<{}, IState> {
        state = {
          狀態名稱: 初始值
        };
      }
      ```

### 練習題：

創建一個名為`Message`的組件，並設置一個狀態`message`，初始值為`Hello, world!`。

## 1.3 使用狀態

你可以用`this.state.狀態名稱`來訪問狀態。當狀態發生變化時，React會自動重新渲染組件。

  ```tsx
  render() {
    return (
      <div>
        <h1>{this.state.狀態名稱}</h1>
      </div>
    );
  }
  ```

### 練習題：

在`Message`組件中，將狀態`message`的值渲染到`<h1>`標籤中。

## 1.4 狀態的更新

狀態的更新必須通過`this.setState()`方法來進行。
 - `setState()`其實有兩個參數，第一個參數是一個新的狀態對象，第二個參數是一個回調函數。
 - **請注意: 這邊必須是Arrow Function，否則`this`會指向undefined。**
 - 狀態進階用法將在後續章節中介紹。會詳細探討這個問題。

### 1.4.1 設置狀態

- 第一個參數可以是一個新的狀態對象。
- 也可以接受一個函數，這個函數接受一個參數`state`，返回一個新的狀態對象。

   ```tsx
   updateState = () => {
     this.setState({ 狀態名稱: 新值 });
   }
   ```
- 如果是以函數修改
  ```tsx
  updateState = () => {
    const func = (state) => {
      return { 狀態名稱: state.狀態名稱 + 1 };
    };
    this.setState(func);
  }
  ```
  
### 1.4.2 狀態的回調函數

- `setState()`的第二個參數是一個回調函數，它會在狀態更新完成並且組件重新渲染後被調用。

  ```tsx
  updateState = () => {
    this.setState({ 狀態名稱: 新值 }, () => {
      console.log('狀態更新完成');
    });
  }
  ```

### 練習題：

1. 擴展`Message`組件，使得每次點擊按鈕時，消息在“Hello, world!”和“Hello, React!”之間切換。 
2. 在狀態更新後，使用回調函數打印一條消息"狀態更新完成"與當前狀態。

## 1.5 使用狀態的常犯錯誤

1. 直接修改狀態：
   - 不要直接修改狀態，應該使用`this.setState()`方法來更新狀態。
   - `this.state`是React保護的，直接修改可能會導致不可預測的結果。
   - TypeScript中，會直接報錯。
      ```tsx
      // 錯誤示例
      this.state.狀態名稱 = 新值;
      ```
  
2. 狀態更新不是即時的：
   - 當`this.setState()`多次調用設置物件時，React會把多次調用的結果合併起來，然後再一次性的更新狀態。
   - 即你呼叫超多次`this.setState()`，React只會更新最後一次的狀態。
   - 這不會有報錯，但是可能會造成非預期的結果。
   - 在進階篇會有更詳細解釋
     ```tsx
     // 錯誤示例，這並不會使`狀態名稱`增加兩次，而是只會增加一次。
     this.setState({ 狀態名稱: this.state.狀態名稱 + 1 });
     this.setState({ 狀態名稱: this.state.狀態名稱 + 1 });
     ```

3. 狀態更新不是同步的：
   - `this.setState()`是異步的，因此如果要獲取更新後的狀態，必須在第二個參數中，使用回調函數來獲取。
   - 如果直接獲取`this.state`，可能會得到更新前的狀態。
     ```tsx
     // 錯誤示例，這依然是舊的狀態
     this.setState({ 狀態名稱: 新值 });
     console.log('狀態更新後的值：', this.state.狀態名稱);
     ```

4. 避免使用`狀態++`
   - `this.setState()`方法傳遞是賦予新的值，更改值不建議使用`++`或`--`，因為可能會造成不可預期的結果。
   - TypeScript中，會直接報錯。
     ```tsx
     // 錯誤示例，這可能會造成不可預期的結果
     this.setState({ 狀態名稱: this.state.狀態名稱++ });
     ```
