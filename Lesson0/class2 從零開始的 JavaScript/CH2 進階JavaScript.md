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

### Promises
Promise是一種更強大的處理

異步操作的方式，它代表了一個最終可能完成或失敗的操作和其結果值。

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Here is your data"), 1000);
  });
}

fetchData().then(data => console.log(data));
```

### `async/await`
`async/await`是基於Promise的語法糖，使異步代碼看起來像同步代碼。

```javascript
async function fetchData() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Here is your data"), 1000);
  });
  let result = await promise; // 等待直到promise解決
  console.log(result);
}
```

#### 練習題
1. 使用Promise寫一個函數，模擬從伺服器獲取用戶名稱的操作。然後用`.then()`處理結果。
2. 將上述函數改寫成使用`async/await`的形式。

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

## 類和繼承

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