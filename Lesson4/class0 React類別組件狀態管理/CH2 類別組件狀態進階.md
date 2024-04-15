# 第二章：進階React組件狀態

## 2.1 `this.setState()` 多次調用的結果

探討`this.setState()`在React組件中多次調用時的行為及結果。

### 2.1.1 Question 1: 多次`this.setState()`調用的結果

考慮以下React類別組件，其中多次調用`this.setState()`來更新同一個狀態屬性：

```jsx
class Question1 extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            attributeName1: 0,
            attributeName2: 0,
        };
    }

    render() {
        return (
            <div style={{backgroundColor: "lightgray", padding: "10px 40px", marginBottom: "20px"}}>
                <h1>Question 1</h1>
                <p>
                    考慮以下React類別組件，其中多次調用`this.setState()`來更新同一個狀態屬性，
                    請問最後`attributeName1`和`attributeName2`的值是多少？
                </p>
                <h2>attributeName1: {this.state.attributeName1}</h2>
                <h2>attributeName2: {this.state.attributeName2}</h2>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={() => this.setState({attributeName1: 0})}>Reset</button>
            </div>
        );
    }

    handleIncrement = () => {
        this.setState({
            attributeName1: this.state.attributeName1 + 1,
            attributeName2: this.state.attributeName2 + 1
        });
        this.setState({ attributeName1: this.state.attributeName1 + 2 });
        this.setState({ attributeName1: this.state.attributeName1 + 3 });
    }
}
```

- **預期結果**: `3 1`
- **解析**: React將對同一渲染周期中的多次`setState()`調用進行批處理。
  - 這意味著多個更新會合併為一個更新，以提高效能。
  - 對於同一屬性的多次更新，只有最後一次更新會被應用。

### 2.1.2 Question 2: `setState()`使用函數更新

考慮以下在事件處理中使用函數形式的`setState()`，最後顯示的狀態值是多少？

```jsx
class Question2 extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = { attributeName1: 0 };
    }

    render() {
        return (
            <div style={{backgroundColor: "lightgray", padding: "10px 40px", marginBottom: "20px"}}>
                <h1>Question 2</h1>
                <p>
                    考慮以下React類別組件，其中多次調用`this.setState()`來更新同一個狀態屬性，
                    請問最後`attributeName1`的值是多少？
                </p>
                <h2>attributeName1: {this.state.attributeName1}</h2>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={() => this.setState({attributeName1: 0})}>Reset</button>
            </div>
        );
    }

    handleIncrement = () => {
        this.setState({attributeName1: this.state.attributeName1 + 1 });
        this.setState((prevState) => ({ attributeName1: prevState.attributeName1 + 2 }));
        this.setState((prevState) => ({ attributeName1: prevState.attributeName1 + 3 }));
    }
}
```

- **預期結果**: `6`
- **解析**: 當`setState()`使用函數形式時，每次更新都基於上一次的狀態結果。
  - 因此，即使這些調用被批處理，每次函數也會接收到最新的狀態值。

## 2.2 `this.setState()`的兩個參數

探討`this.setState()`的兩個參數的用法和行為，特別是它們如何影響狀態更新後的操作。

### 2.2.1 Question 3: `setState()`的回調函數

以下是一個使用`this.setState()`回調函數的例子：

```jsx
class Question3 extends Component<{}, IState> {
  constructor(props: any) {
    super(props);

    this.state = {attributeName1: 0};
  }

  render() {
    return (
            <div style={{backgroundColor: "lightgray", padding: "10px 40px", marginBottom: "20px"}}>
              <h1>Question 3</h1>
              <p>
                考慮以下React類別組件，其中多次調用`this.setState()`來更新同一個狀態屬性，
                請問console.log()的輸出是什麼？
              </p>
              <h2 id="target">attributeName1: {this.state.attributeName1}</h2>
              <button onClick={() => {
                this.setState({attributeName1: this.state.attributeName1 + 1});
                this.setState((state) => {
                  console.log('First state value: ', state.attributeName1);
                  console.log('First real dom value: ', document.getElementById('target')?.textContent);
                }, () => {
                  console.log('Second state value: ', this.state.attributeName1);
                  console.log('Second real dom value: ', document.getElementById('target')?.textContent);
                });
              }}>Increment
              </button>
            </div>
    )
  }
}
```
- **預期結果**: 
    ```
    First state value: 1
    First real dom value: attributeName1: 0
    Second state value: 1
    Second real dom value: attributeName1: 1
    ```
- **解析**: 因：`this.setState()`方法的有兩個參數，若都是函數，
    - 第一個會在更新狀態後，依序調用函數，並且傳遞最新的狀態值。
    - 第二個會在更新狀態後，並且重新渲染後，調用函數，並且傳遞最新的狀態值。

### 2.3 重點整理

這部分總結了關於`this.setState()`的使用細節和行為，幫助學生更好地理解React組件狀態更新的機制。

- **`this.setState()`多次調用的結果**：
  - 當在同一事件處理函數中多次調用`this.setState()`是這對象時，React會將這些更新合併成一個更新操作來執行。
  - 這種行為是React的優化措施，旨在提高應用的性能。合併更新確保只觸發一次重新渲染，無論多少個狀態更新被合併。
  - 合併操作僅保留每個狀態屬性的最後一次更新值，即使多個更新對同一屬性進行修改也是如此。

- **`this.setState()`使用函數的方式**：
  - 當`this.setState()`的參數是一個函數而不是一個對象時，這種方式允許接收到前一狀態作為參數，從而基於最新的狀態值進行更新。這在處理有依賴於當前狀態值的複雜狀態邏輯時特別有用。
  - 這樣做可以保證狀態的更新基於最新的信息，並避免了因狀態更新操作被批處理而可能引起的問題。

- **`this.setState()`的兩個參數**：
  - `this.setState()`可以接受兩個參數：一個是更新狀態的函數或對象，另一個是回調函數。回調函數將在狀態更新且組件重新渲染後執行。
  - 使用回調函數是處理狀態更新後需要進行的操作的一種安全方式，保證這些操作在DOM更新完成後進行，從而可以獲得更新後的狀態值和UI。
