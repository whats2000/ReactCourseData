# JavaScript ES6, ES7的語法介紹

歡迎來到JavaScript ES6和ES7的世界！這一課程將引導你了解和掌握JavaScript的現代語法特性。這些特性不僅讓代碼更加簡潔、易於理解，而且也是現代前端框架（如React）開發的基礎。

## ES6 (ECMAScript 2015) 特性

### 1. 變數宣告 - `let` 和 `const`

- **`let`**：允許你聲明一個只在區塊作用域內有效的變數。
- **`const`**：允許你聲明一個只讀的常量，一旦賦值後不能改變。
- 不建議使用 `var`：`var` 是 ES6 之前的變數聲明方式，它存在變數提升和全局作用域的問題。
- 這會導致代碼的可讀性和可維護性下降。大部分公司的程式規範中都不能使用 `var`。

#### 示例

在 ES6 中，變數的聲明方式如下：

```javascript
let name = 'John Doe';
const PI = 3.14;

const obj = {
    name: 'John Doe',
    age: 20
};

obj.name = 'Jane Doe'; // 可以修改對象的屬性
```

### 2. 箭頭函數

- 提供了一種更簡潔的方式來寫函數表達式。
- 與傳統函數不同，箭頭函數不會創建自己的 `
  this`，它會繼承父作用域的 `
  this`。這個特性在React開發中非常有用。
- 若函數體只有一行，可以省略大括號以及 return。
- 使用方式近似於Python的 lambda 表達式。所以箭頭函數也被稱為 lambda 函數。

#### 示例

在 ES6 中，箭頭函數的聲明方式如下：

```javascript
// 函數只有一行，可以省略大括號以及 return
const sumA = (a, b) => a + b;

// 等同於
const sumB = (a, b) => {
    return a + b;
};

console.log(sumA(1, 2)); // 3
console.log(sumB(1, 2)); // 3
```

### 3. 模板字符串

- 提供了一種更簡潔的方式來寫字符串。
- 可以使用 `${}` 來插入變數或表達式。
- 可以跨行，不需要使用 `\` 來換行。
- 近似於Python的 f-string。
  ```python
  name = 'John Doe'
  text = f'Hello, {name}!'
  ```

#### 示例

在 ES6 中，模板字符串的聲明方式如下：

```javascript
let name = 'John Doe';
let text = `Hello, ${name}!`;

console.log(text); // Hello, John Doe!

let multiLine = `
    This is
    a multi-line
    text.
`;
console.log(multiLine);
```

### 4. 解構賦值

- 提供了一種更簡潔的方式來從數組或對象中提取數據。
- 可以同時聲明多個變數，並從數組或對象中提取對應的值賦給這些變數。
- 這在React開發中非常有用，可以更方便地從 `props` 或 `state` 中提取數據。
- 也可以用於函數的參數中，這樣可以更方便地提取參數中的數據。

#### 示例

在 ES6 中，解構賦值的聲明方式如下：

```javascript
// 數組解構賦值
const [a, b] = [1, 2];
console.log(a, b); // 1 2

// 對象解構賦值，但是需要同名
const {name, age} = {name: 'John Doe', age: 20};
console.log(name, age); // John Doe 20

// 如果需要更改變數名，可以使用冒號
const {name: nameRename, age: ageRename} = {name: 'John Doe', age: 20};
console.log(nameRename, ageRename); // John Doe 20
```

### 5. 函數參數的默認值

- 提供了一種更簡潔的方式來設置函數參數的默認值。
- 可以在函數聲明時直接設置參數的默認值。
- 這在React開發中非常有用，可以更方便地設置 `props` 的默認值。

#### 示例

在 ES6 中，函數參數的默認值的聲明方式如下：

```javascript
const sayHello = (name = 'John Doe') => {
    console.log(`Hello, ${name}!`);
};

sayHello(); // Hello, John Doe!
```

### 6. 展開運算符

- 提供了一種更簡潔的方式來將數組或對象展開成數據。
- 可以用於數組、對象、函數的參數等。

#### 示例

在 ES6 中，展開運算符的使用方式如下：

```javascript
// 展開數組
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2); // [1, 2, 3, 4, 5, 6]

const obj1 = {name: 'John Doe', age: 20};
const obj2 = {...obj, favorite: 'JavaScript'};
console.log(obj2); // { name: 'John Doe', age: 20, favorite: 'JavaScript' }
```

### 7. Promise

提供了一種更簡潔的方式來處理異步操作。還記得熟悉的`Ajax`嗎？`Promise`是個更現代化且更強大的替代方案。`Promise`對象代表一個異步操作的最終完成（或失敗）及其結果值。

- **狀態**：
  - `pending`（進行中）
  - `fulfilled`（已成功）
  - `rejected`（已失敗）

`Promise`對象的狀態改變只有兩種可能：從`pending`變為`fulfilled`和從`pending`變為`rejected`。一旦狀態改變，將永遠保持這個狀態，不會再變。

#### 示例：從服務器獲取數據

以下示例展示了如何使用 `fetch` API（基於 Promise）從一個網絡API獲取數據。我們將數據抓取的結果輸出到控制台中。

```javascript
// 使用fetch獲取中山大學選課助手的課程API版本信息
const data = fetch('https://whats2000.github.io/NSYSUCourseAPI/version.json')
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

### 8. async/await

- 提供了一種更簡潔的方式來處理異步操作。
- `async` 函數返回一個 `Promise` 對象，可以使用 `await` 來等待 `Promise` 對象的解析。
- `async/await` 是基於 `Promise` 的一種更高級的異步操作解決方案。
- 這在 React 開發中非常有用，可以更方便地處理異步操作。

#### 示例

```javascript
// 使用async/await獲取中山大學選課助手的課程API版本信息
fetchData = async () => {
  try {
    const response = await fetch('https://whats2000.github.io/NSYSUCourseAPI/version.json');
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

### 9. 物件導向的語法糖

- 提供了一種更簡潔的方式來定義類和繼承。
- `class` 關鍵字可以用來定義類，`extends` 關鍵字可以用來實現繼承。
- 這在 React 開發中非常有用，可以更方便地定義組件。

#### 示例
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}

let dog = new Dog('Rex');
dog.speak(); // Rex barks.
```

## ES7 (ECMAScript 2016) 特性

### 1. Array.prototype.includes()

- 提供了一種更簡潔的方式來判斷數組中是否包含某個元素。
- 這在 React 開發中非常有用，可以更方便地判斷數組中是否包含某個元素。
- 這是一個實例方法，所以可以直接調用。

#### 示例

```javascript
let arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3)); // true
console.log(arr.includes(6)); // false

let str = 'Hello, world!';
console.log(str.includes('world')); // true
console.log(str.includes('John')); // false
```

### 2. 指數運算符

- 提供了一種更簡潔的方式來計算數字的指數。
- 把 `**` 當作指數運算符，可以用來計算數字的指數。~~又是學Python的~~

#### 示例

```javascript
console.log(2 ** 3); // 8
console.log(10 ** 2); // 100
```

### 3. Object.entries()

- 提供了一種更簡潔的方式來獲取對象的鍵值對。
- 返回一個給定對象自身可枚舉屬性的鍵值對數組。
- 用起來與Python的 `items()` 方法很相似。
- 這在 React 開發中非常有用，可以更方便地獲取對象的鍵值對。

#### 示例

```javascript
let obj = {name: 'John Doe', age: 20};
console.log(Object.entries(obj)); // [ [ 'name', 'John Doe' ], [ 'age', 20 ] ]
```

### 4. Object.values()

- 提供了一種更簡潔的方式來獲取對象的值。
- 返回一個給定對象自身可枚舉屬性的值數組。

#### 示例

```javascript
let obj = {name: 'John Doe', age: 20};
console.log(Object.values(obj)); // [ 'John Doe', 20 ]
```

### 5. 無 Constructor 的 Class

- 提供了一種更簡潔的方式來定義類。
- 可以直接定義屬性和方法，不需要顯式定義 `constructor` 方法。
- 如果一個類沒有顯式定義 `constructor` 方法，則會自動添加一個空的 `constructor` 方法。

#### 示例

```javascript
class AnimalA {
  name = 'John Doe';
  speak = () => {
    console.log(this.name + ' makes a noise.');
  }
}

// 等同於
class AnimalB {
  constructor() {
    this.name = 'John Doe';
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

let animalA = new AnimalA();
animalA.speak(); // John Doe makes a noise.

let animalB = new AnimalB();
animalB.speak(); // John Doe makes a noise.
```

## 總結

- ES6 和 ES7 提供了許多新的語法特性，這些特性使得 JavaScript 更加強大和易於使用。
- 這些特性不僅可以提高代碼的可讀性和可維護性，而且也是現代前端框架（如 React）開發的基礎。
- 這些特性在 React 開發中非常有用，可以更方便地開發和維護 React 應用。
