# 第2章：進階JavaScript

## 2.1 對象和數組

### 創建和訪問對象
JavaScript對象是鍵值對的集合。你可以使用大括號`{}`來創建對象，並透過`.`或`[]`來訪問對象的屬性。

```javascript
let person = {
  name: "Alice",
  age: 25
};

console.log(person.name); // 使用.訪問
console.log(person['age']); // 使用[]訪問
```

### 數組操作
數組是一種用於存儲有序集合的數據結構。你可以使用`push`添加元素，使用`pop`刪除元素，並使用`for`循環或`forEach`方法遍歷數組。

```javascript
let fruits = ["apple", "banana", "cherry"];
fruits.push("orange"); // 添加元素
fruits.pop(); // 刪除最後一個元素
fruits.forEach(function(fruit) {
  console.log(fruit);
});
```

#### 練習題
1. 創建一個對象，代表一本書，包含標題、作者和出版年份。然後，打印這本書的標題。
2. 創建一個包含三種不同蔬菜的數組，然後添加一種蔬菜到數組中，最後遍歷這個數組並打印每種蔬菜。

## 2.2 高階函數和閉包

### `map`, `filter`, `reduce`等高階函數
這些是處理數組的強大工具，允許你對數組的每個元素執行特定操作，並返回一個新的結果。

```javascript
let numbers = [1, 2, 3, 4, 5];
let squared = numbers.map(x => x * x);
let evens = numbers.filter(x => x % 2 === 0);
let sum = numbers.reduce((acc, current) => acc + current, 0);
```

### 閉包的概念和用途
閉包允許你在一個函數內部訪問另一個函數的作用域。這是一種強大的JavaScript特性，可用於創建私有變量。

- 當作補充就好

```javascript
function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  };
}

let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
```

#### 練習題
1. 使用`map`函數將一個數字數組的每個元素加倍。

## 2.3 異步編程

### 回調函數
在JavaScript中，異步操作如事件處理或網絡請求常常需要回調函數。

```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback("Here is your data");
  }, 1000);
}

fetchData(data => {
  console.log(data);
});
```

### Promise

提供了一種更簡潔的方式來處理異步操作。還記得熟悉的`Ajax`嗎？`Promise`是個更現代化且更強大的替代方案。`Promise`對象代表一個異步操作的最終完成（或失敗）及其結果值。

- **狀態**：
  - `pending`（進行中）
  - `fulfilled`（已成功）
  - `rejected`（已失敗）

`Promise`對象的狀態改變只有兩種可能：從`pending`變為`fulfilled`和從`pending`變為`rejected`。一旦狀態改變，將永遠保持這個狀態，不會再變。

#### 示例：從服務器獲取數據

以下示例展示了如何使用 `fetch` API（基於 Promise）從一個網絡API獲取數據。我們將數據抓取的結果輸出到控制台中。

```javascript
// 使用fetch獲取API_URL資料
const data = fetch(API_URL)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => console.log(data)) // { latest: '1122', history: { '1121': '112下', '1122': '112暑期' } }
        .catch(error => console.error('Fetching error:', error));

// 由於fetch是非同步的，所以這裡的data是一個Promise對象，這個對象的狀態是pending
console.log(data); // Promise { <pending> }
```

### async/await

- 提供了一種更簡潔的方式來處理異步操作。
- `async` 函數返回一個 `Promise` 對象，可以使用 `await` 來等待 `Promise` 對象的解析。
- `async/await` 是基於 `Promise` 的一種更高級的異步操作解決方案。
- 這在 React 開發中非常有用，可以更方便地處理異步操作。

#### 示例

```javascript
// 使用async/await獲取API_URL資料
fetchData = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data); // 通常處理獲取到的數據，然後保存到React狀態中
  } catch (error) {
    console.error('無法獲取數據', error);
  }
}

fetchData().then(() => {
  console.log('fetchData 完成');
}).catch((error) => {
  console.error('fetchData 失敗', error);
});
```

#### 練習題
1. 使用Promise寫一個函數，模擬從伺服器獲取用戶名稱的操作。然後用`.then()`處理結果。
2. 將上述改寫成使用`async/await`的函數形式。

## 2.4 模塊化JavaScript

### 使用模塊導入和導出功能
模塊化可以幫助你組織和重用代碼。在ES6中，你可以使用`import`和`export`語句來共享代碼。

```javascript
// file: math.js
export function add(x, y) {
  return x + y;
}

// in another file
import { add } from './math.js';
console.log(add(1, 2));
```

#### 練習題
1. 創建一個模塊，導出一個函數，該函數接受一個數字並返回其平方。
2. 在另一個文件中導入該函數並使用它。

## 2.5 類和繼承

### 使用類定義對象

在ES6中，你可以使用`class`關鍵字定義類，並使用`constructor`方法初始化對象。

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

let alice = new Person("Alice", 25);
alice.sayHello();
```

### 繼承和多態

你可以使用`extends`關鍵字創建一個子類，並使用`super`關鍵字調用父類的構造函數。

```javascript
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am in grade ${this.grade}`);
  }
}

let bob = new Student("Bob", 15, 9);
bob.sayHello();
```

#### 練習題
1. 創建一個`Animal`類，該類有一個`name`屬性和一個`makeSound`方法。然後創建一個`Dog`類，該類繼承自`Animal`，並重寫`makeSound`方法以返回`"Woof!"`。
2. 創建一個`Cat`類，該類繼承自`Animal`，並重寫`makeSound`方法以返回`"Meow!"`。