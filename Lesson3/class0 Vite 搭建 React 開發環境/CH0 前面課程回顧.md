# CH0 前面課程回顧

期中考過的如何? 我幫你回顧一下前面的課程內容，讓你更快上手 React 開發。

## 1. JavaScript ES6/ES7特性

- **變數宣告**：
    - `let`: 宣告的變數可變變數，並且具有塊級作用域。
    - `const`: 宣告的變數不可變，同樣具有塊級作用域。
    - 取代了`var`的全局作用域和變數提升問題。
- **箭頭函數**：提供了一種更簡潔的函數聲明方式，且不綁定自己的`this`，使得它在React開發中尤其有用。
    - 合規定的箭頭函數用法
      ```javascript
      () => expression
      
      param => expression
      
      (param) => expression
      
      (param1, paramN) => expression
      
      () => {
        statements
      }
      
      param => {
        statements
      }
      
      (param1, paramN) => {
        statements
      }
      ```
- **模板字符串**：
    - 允許嵌入表達式的字符串字面量，使字符串操作更加靈活。
    - 使用反引號（`）來定義模板字符串，並使用`${}`來插入表達式。
      ```javascript
      const name = 'World';
      const greeting = `Hello, ${name}!`;
      ```
- **解構賦值**：
    - 一種表達式，允許你從數組或對象中提取數據，並賦值給新的變數。
    - 用於快速訪問和使用數組或對象的屬性。
      ```javascript
      const arr = [1, 2, 3];
      const [a, b, c] = arr;
      
      const obj = { x: 1, y: 2, z: 3 };
      const { x, y, z } = obj;
      ```
- **函數參數的默認值**：
    - 允許在函數聲明時為參數指定默認值。
    - 當調用函數時，如果沒有提供參數，將使用默認值。
      ```javascript
      function greet1(name = 'World') {
        return `Hello, ${name}!`;
      }
      
      const greet2 = (name = 'World') => `Hello, ${name}!`;
      ```
- **展開運算符**：
    - 可以在函數調用/數組構造時，將數組表達式或字符串在字面量中展開
    - 也可在對象字面量中將對象表達式展開為另一個對象的屬性。
    - 用於合併數組、對象或字符串。
      ```javascript
      const arr1 = [1, 2, 3];
      const arr2 = [4, 5, 6];
      const mergedArr = [...arr1, ...arr2];
      
      const obj1 = { x: 1, y: 2 };
      const obj2 = { z: 3 };
      const mergedObj = { ...obj1, ...obj2 };
      ```
- **Promise 和 async/await**：
    - 為JavaScript引入了更簡潔、更直觀的異步操作處理方式。
    - `Promise`對象用於表示一個異步操作的最終完成或失敗。
    - `async`和`await`關鍵字用於定義異步函數和等待異步操作的完成。
      ```javascript
      const fetchData = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve('Data fetched!');
          }, 1000);
        });
      }
      
      const fetchDataAsync = async () => {
        const data = await fetchData();
        console.log(data);
      }
      ```
- **類和繼承的語法糖**：
    - 使得基於原型的繼承更加清晰和易於使用。
    - 使用`class`關鍵字定義類，並使用`extends`關鍵字實現繼承。
    - 提供了更接近傳統面向對象語言的語法。
      ```javascript
      class Animal {
        constructor(name) {
          this.name = name;
        }
        
        speak() {
          console.log(`${this.name} makes a noise.`);
        }
      }
      
      class Dog extends Animal {
        speak() {
          console.log(`${this.name} barks.`);
        }
      }
      ```

---

## 2. TypeScript基礎

- **類型系統**：
    - TypeScript為JavaScript引入了靜態類型檢查，提高了程式碼的穩定性和可維護性。
    - 通過定義類型，可以更早地發現和修復潛在的錯誤。
      ```typescript
      function greet(name: string) {
        return `Hello, ${name}!`;
      } 
      ```
- **面向對象特性**：
    - 支持類、接口、泛型等，讓程式設計更靈活。
      ```typescript
      interface Person {
        name: string;
        age: number;
      }
      
      class Student implements Person {
        public name: string;
        public age: number;
      
        constructor(name: string, age: number) {
          this.name = name;
          this.age = age;
        }
      }
      ```
- **嚴謹的編譯檢查**：
    - 在編譯時進行類型檢查，幫助發現潛在錯誤。
    - 提供更好的程式碼提示和自動完成功能，提高開發效率。
- **易於遷移**：
    - 作為JavaScript的超集，允許開發者漸進式地採用TypeScript。
    - 可以在現有的JavaScript項目中逐步引入TypeScript，而不需要重寫現有的程式碼。
- **廣泛應用**：
    - 在業界獲得廣泛應用，在近年公司對要求開發者有TypeScript的使用經驗有增加的趨勢。

---

## 3. DOM, 虛擬DOM與React操控虛擬DOM

- **DOM（Document Object Model）**：
    - 一個跨平台和語言獨立的接口，允許程序動態訪問和更新文檔的內容、結構及樣式。
    - 原生DOM操作效率較低，React通過虛擬DOM來提高DOM操作的效率。
- **虛擬DOM**：
    - React引入的概念，是DOM的輕量級副本，存在於記憶體中。
    - React通過比較新舊虛擬DOM的差異，來決定是否和如何有效地更新真實的DOM。
- **使用React.createElement**：
    - 這是React用來描述UI組件的方法，它允許開發者以一種宣告式的方式來創建元素。
    - `React.createElement(type, props, ...children)`：
        - 創建一個React元素，其中`type`表示元素的類型，`props`表示元素的屬性，`children`表示元素的子元素。
- **使用ReactDOM.createRoot和render方法**：
    - 在React 18中，`ReactDOM.createRoot`用於創建一個根渲染器，`render`
      方法則用於將React元素渲染到指定的DOM容器中。

---

## 4. 引入JSX和Babel

- **Babel的角色**：
    - 為了讓瀏覽器理解JSX語法，需要使用Babel這一工具將JSX轉譯成純JavaScript程式碼。
    - Babel同時也支持將ES6及更新版本的JavaScript程式碼轉換成向下兼容的格式。
- **JSX**：
    - JSX是一種類似於XML的語法，它允許開發者在JavaScript中寫入類HTML的標記，使得UI組件的程式碼更直觀易懂。
    - JSX在React中扮演了描述UI組件的角色，並通過Babel轉譯成純JavaScript程式碼。
- **JSX 基本語法**：
    - 在JSX中，可以直接寫入類HTML的標記來定義React元素
    ```jsx
    const element = <h1>Hello, world!</h1>;
    ```
- **動態數據**：
    - JSX允許開發者在大括號中插入任何有效的JavaScript表達式，從而實現動態數據的注入。
    - 使用大括號`{}`來插入JavaScript表達式。
      ```jsx
      const text = 'World';
      const element = <h1>Hello, {text}!</h1>;
      ```
- **支持的表達式**

    - 使用 `&&` 來實現 if 的條件渲染
      ```jsx
      const isLoggedIn = true;
      const element = (
        <div>
          {isLoggedIn && <h1>Welcome back!</h1>}
        </div>
      );
      ```
    - 使用 `? :` 來實現 if-else 的條件渲染
      ```jsx
      const isLoggedIn = true;
      const element = (
        <div>
          {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up!</h1>}
        </div>
      );
      ```
    - 使用 `map` 來實現列表渲染
      ```jsx
      const numbers = [1, 2, 3, 4, 5];
        
      const listItems = numbers.map((number) =>
        <li key={number.toString()}>{number}</li>
      );
      ```