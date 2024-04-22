# 第三章：類別組件狀態與 `this` 指向問題

在React類別組件中，正確理解和管理`this`的指向是關鍵的。不當的`this`
指向可以導致錯誤或者不預期的行為。本章將詳細介紹如何在事件處理和其他方法中正確使用`this`，並提供實踐練習來加深理解。

## 1. 組件函數中的`this`指向

在React類別組件中，`this`的指向不是自動綁定到當前實例的。這意味著如果你直接在事件處理器或回調函數中使用`this`
，它可能不會指向當前組件實例。

### 1.1 使用箭頭函數處理`this`指向

箭頭函數不會有自己的`this`上下文，它們會捕獲其所在上下文的`this`值。在React組件中使用箭頭函數是處理`this`指向的一種常見和簡便的方法。

#### 練習題1:

修正以下程式碼，使之正確更新計數器的數字。

```tsx
import React from "react";

interface ICounterState {
  count: number;
}

class Counter extends React.Component<{}, ICounterState> {
  state = {
    count: 0
  };

  handleClick() {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default Counter;
```

### 1.2 分離事件處理函數以提高可維護性

將事件處理函數定義為組件的方法可以提高程式碼的可讀性和可維護性。這也使得處理函數可以重用並且更容易測試。

#### 1.2.1 五種方法處理`this`指向問題

1. 在 `constructor` 中綁定義箭頭函數
   - 在類別組件的構造函數中直接定義箭頭函數並將其賦值給實例的屬性。
   - 優點：確保this指向正確，易於理解。
   - 缺點：每個組件實例都會創建一份新的函數副本，增加記憶體負擔。

       ```tsx
       import React from "react";
      
       interface ICounterState {
         count: number;
       }
      
       class Counter extends React.Component<{}, ICounterState> {
         state = {
           count: 0
         };
      
         constructor(props: {}) {
           super(props);
           this.handleClick = () => {
             this.setState({ count: this.state.count + 1 });
           };
         }
      
         render() {
           return (
             <div>
               <p>{this.state.count}</p>
               <button onClick={this.handleClick}>Click me</button>
             </div>
           );
         }
       }
      
       export default Counter;
       ```

2. 使用上述箭頭函數的簡寫
    - 類似於在構造函數中定義，但以類屬性的形式直接在類體中定義箭頭函數。
    - 這個方法在React類別組件中是最常見的。
    - 優點：更簡潔，同樣確保this正確。
    - 缺點：同上，每個組件實例創建新函數副本。

       ```tsx
       import React from "react";
       
       interface ICounterState {
         count: number;
       }
       
       class Counter extends React.Component<{}, ICounterState> {
         state = {
           count: 0
         };
       
         handleClick = () => {
           this.setState({ count: this.state.count + 1 });
         };
       
         render() {
           return (
             <div>
               <p>{this.state.count}</p>
               <button onClick={this.handleClick}>Click me</button>
             </div>
           );
         }
       }
       
       export default Counter;
       ```

3. 在使用時額外包裹一層箭頭函數
   - 在 JSX 中直接使用箭頭函數調用方法，當我們需要傳遞參數時，這種方法非常有用。
   - 優點：編寫簡單，直觀。
   - 缺點：每次組件渲染時創建新的函數實例，可能導致不必要的重新渲染。

     ```tsx
     import React from "react";
   
     interface ICounterState {
       count: number;
     }
   
     class Counter extends React.Component<{}, ICounterState> {
       state = {
         count: 0
       };
   
       handleClick(num: number) {
         this.setState({ count: this.state.count + num });
       }
   
       render() {
         return (
           <div>
             <p>{this.state.count}</p>
             <button onClick={() => this.handleClick(5)}>Click me</button>
           </div>
         );
       }
     }
   
     export default Counter;
     ```

4. 使用`bind`方法
   - 在構造函數中使用bind確保事件處理函數中的this指向組件實例。
   - 優點：保持傳統的函數定義，可以共享方法而不需重新創建。
   - 缺點：語法稍微複雜，初學者可能較難理解。
   
     ```tsx
     import React from "react";
   
     interface ICounterState {
       count: number;
     }
    
     class Counter extends React.Component<{}, ICounterState> {
       state = {
         count: 0
       };
   
       constructor(props: {}) {
         super(props);
         this.handleClick = this.handleClick.bind(this);
       }
   
       handleClick() {
         this.setState({ count: this.state.count + 1 });
       }
   
       render() {
         return (
           <div>
             <p>{this.state.count}</p>
             <button onClick={this.handleClick}>Click me</button>
           </div>
         );
       }
     }
   
     export default Counter;
     ```

5. 直接在 `render()` 中定義箭頭函數
   - 直接在render方法內部定義箭頭函數處理事件。
   - 這種做法在類別組件中通常不被推薦，因為它會對性能產生負面影響。然而，在函數組件的語境下，這成為了一種非常普遍的做法。React的進一步優化和 `useCallback` 鉤子的引入為這種做法提供了性能上的補救。
   - 優點：寫法簡單，易於理解。
   - 缺點：每次組件渲染時都會創建新的函數實例，增加渲染負擔，可能導致不必要的重新渲染。

      ```tsx
      import React from "react";
      
      interface ICounterState {
        count: number;
      }
      
      class Counter extends React.Component<{}, ICounterState> {
        state = {
          count: 0
        };
        
        render() {
          const handleClick = () => {
            this.setState({ count: this.state.count + 1 });
          };
          
          return (
            <div>
              <p>{this.state.count}</p>
              <button onClick={handleClick}>Click me</button>
            </div>
          );
        }
      }
      
      export default Counter;
      ```
     
#### 1.2.2 練習題
分別使用上述的五種方法來完成 Counter 組件的事件處理。

### 1.3 補充: 使用`bind`方法綁定`this`的原理

這並非由 React 造就的問題，而是 JavaScript 語言本身的特性。
- 在 JavaScript 中，函數的`this`值是在函數被調用時動態確定的。
- 這意味著當你調用一個函數時，`this`的值取決於調用方式。

#### 1.3.1 第一步：類別和構造函數

- 類別的實例化：
  - 在類別被定義時，其方法（包括 `constructor()`）並不立即在記憶體中"定義好"。
  - 而是當使用 `new` 關鍵字創建類別的新實例時，這些方法才與實例相關聯。
- 方法的存儲：
  - 非靜態方法通常不在每個實例中單獨存儲，而是存儲在類別的原型對象上。
  - 這意味著所有實例共享相同的方法，而不需要為每個實例創建方法的副本。

#### 1.3.2 第二步：使用 `new` 創建實例

- 創建過程：
  - 使用 `new` 創建類別的實例時，JavaScript 首先創建一個新對象，並將類別的原型鏈接到這個新對象上。
  - 然後調用構造函數，其中 `this` 指向新創建的對象。

#### 1.3.3 第三步：方法和 `bind()`

- `bind()` 的功能：
  - 在構造函數中使用 `bind(this)` 可以為該方法創建一個新的函數實例，並將 `this` 固定為當前類別的實例。
- 創建新的函數對象：`bind()` 
  - 實際上創建了一個新的函數對象，這個新函數對象在調用時 `this` 會永久指向被 `bind` 處理時指定的對象（即類別的實例）。
- 給類別實例賦值：
  - 經過 `bind` 處理的新函數對象會被賦值給類別實例的相應屬性，保證在任何時候調用此方法時，`this` 都正確指向該實例。
