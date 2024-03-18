## 2.6 展開運算符

### 使用展開運算符
展開運算符（`...`）允許一個表達式在某些場合下被擴展為多個元素。這在處理數組和對象時特別有用。

```javascript
// 合併數組
let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];
let mergedArray = [...firstArray, ...secondArray];

// 複製對象
let originalObject = { a: 1, b: 2 };
let copiedObject = { ...originalObject, b: 3 };
```

#### 練習題
1. 使用展開運算符合併兩個數組。
2. 展開 User A 物件，並修正 age 的值

## 2.7 箭頭函數

### 箭頭函數的使用
箭頭函數提供了一種更簡潔的方式來寫函數表達式。它不僅語法簡潔，還改變了`this`關鍵字的綁定行為。
- 這對 React 開發非常有用，因為在 React 中，`this` 關鍵字的綁定行為經常會引起問題。

```javascript
// 函數表達式轉箭頭函數
let add = number => number * number;

// 使用箭頭函數重寫array.map
let numbers = [1, 2, 3, 4];
let squares = numbers.map(add);
```

#### 練習題
1. 將一個函數表達式轉換為箭頭函數。
2. 比較箭頭函數和普通函數的`this`關鍵字綁定行為。

## 2.8 模板字符串

### 模板字符串的使用
模板字符串提供了一種更簡潔、更可讀的方式來創建包含變量的字符串。通過使用反引號（\` \`）包圍字符串，並用`${}`插入變量或表達式。

```javascript
// 使用模板字符串
let name = "Alice";
let age = 25;
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;

// 使用模板字符串的函數
function describePerson(person) {
  return `${person.name} is ${person.age} years old and lives in ${person.city}.`;
}
```

#### 練習題
1. 使用模板字符串重構一段包含多個變量的字符串。
2. 創建一個使用模板字符串的函數，該函數接受一個對象作為參數，返回對象的描述字符串。

當然，解構賦值是ES6中引入的又一個非常有用的特性，它允許你以非常直觀的方式從數組或對象中提取值，並將這些值賦給變量。這大大簡化了數據訪問和賦值的過程。

---

## 2.9 解構賦值

### 從對象解構
對象解構允許你直接從一個對象中提取出一個或多個屬性的值。

```javascript
let person = {
  name: 'John Doe',
  age: 30,
  location: 'New York'
};

// 傳統方式
let name = person.name;
let age = person.age;

// 解構賦值
let { name, age } = person;
console.log(name); // John Doe
console.log(age); // 30
```

### 從數組解構
數組解構讓你能夠從數組中按順序提取值，並賦給變量。

```javascript
let numbers = [1, 2, 3, 4, 5];

// 傳統方式
let first = numbers[0];
let second = numbers[1];

// 解構賦值
let [first, second] = numbers;
console.log(first); // 1
console.log(second); // 2
```

### 默認值與剩餘參數
解構賦值還支持默認值和剩餘參數，這使得它更加靈活。

```javascript
// 默認值
let [first, second, third = 3] = [1, 2];
console.log(third); // 3

// 剩餘參數
let [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(rest); // [3, 4, 5]
```

#### 練習題
1. 給定一個對象`{firstName: 'James', lastName: 'Bond', country: 'UK'}`，使用對象解構賦值來提取`firstName`和`country`。
2. 給定一個數組`[100, 200, 300, 400, 500]`，使用數組解構賦值來提取第一個和第三個元素。
