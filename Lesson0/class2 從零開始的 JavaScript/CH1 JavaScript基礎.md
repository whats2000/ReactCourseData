# 第1章：JavaScript基礎

## 1.1 了解JavaScript

### JavaScript在網頁開發中的作用
JavaScript是一種腳本語言，可以讓網頁具有更多的互動性和動態效果。它可以讓網頁響應用戶的操作，比如點擊按鈕、提交表單、動態更新內容等。

### 如何在HTML中使用`<script>`標籤
在HTML中，可以通過`<script>`標籤引入JavaScript程式碼。你可以直接在`<script>`標籤內寫程式碼，或者通過`src`屬性引用外部的JavaScript文件。

```html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript示例</title>
</head>
<body>

</body>
<script>
    console.log('Hello, World!');
</script>
</html>
```

#### 練習題
1. 在HTML文檔中添加一個`<script>`標籤，並在其中寫一行JavaScript程式碼：`alert('Hello, World!');`。查看彈出效果。

## 1.2 基本語法和變量

### 聲明變量（使用`let`和`const`）
在JavaScript中，你可以使用`let`和`const`來聲明變量。`let`用於聲明可以改變的變量，`const`用於聲明常量，一旦賦值之後不可更改。

### 變量命名規則和實踐
變量名可以包含字母、數字、下劃線(_)和美元符號($)，但不能以數字開頭。推薦使用描述性的名稱，並遵循camelCase命名法則。

- 在JavaScript中 `$apple` 這樣命名是可以的
- 所謂的小駝峰 (camelCase) 指多個詞組合的變數時，首個詞是小寫開頭，第二個詞接續第一個詞，但是首字母換成大寫，這也應用於命名一般函數。

```js
let applePen = 5;
```

#### 練習題
1. 使用`let`聲明一個變量`myNumber`，將其賦值為5。然後，使用`console.log`打印這個變量的值。
   - `console.log` 是 JavaScript 輸出信息到終端上的方法

## 1.3 數據類型和運算符

### 字符串、數字、布爾值等基本類型
JavaScript有幾種基本數據類型：`string`（文本）、`number`（整數和浮點數）、`boolean`（`true`或`false`）、`null`和`undefined`。

- `null` 是描述一個空值
- `undefined` 是描述一個未定義的值，與 `null` 不同，這會在變數被聲明但未賦值時出現

### 簡單的算術運算符和比較運算符
算術運算符包括加（`+`）、減（`-`）、乘（`*`）、除（`/`）等。比較運算符包括等於（`==`）、不等於（`!=`）、嚴格等於（`===`）、嚴格不等於（`!==`）等。

- 所謂的嚴格等於 (===) 是指兩個值不僅要相等，而且要類型也要相等
- 嚴格等於實際意義是：`5 == "5"` 是 `true`，但是 `5 === "5"` 是 `false`，嚴格等於比較近似 C 語言中的 `==` 運算符
- 這是很容易混淆的地方，原因在 JavaScript 中，`==` 是會自動轉換類型的，而 `===` 是不會自動轉換類型的

#### 練習題
1. 創建兩個變量，分別存儲任意兩個數字，然後使用算術運算符計算它們的和。使用`console.log`打印結果。
2. 打印 `5 == "5"` 和 `5 === "5"` 的結果。
3. 打印 `null == undefined` 和 `null === undefined` 的結果。

## 1.4 控制流程

### 使用`if...else`進行條件判斷
`if...else`語句用於基於條件執行不同的程式碼塊。

- 如果要多個條件判斷，可以使用 `else if` 來進行判斷

```js
let myNumber = 5;
if (myNumber > 10) {
    console.log('大於10');
} else if (myNumber < 10) {
    console.log('小於10');
} else {
    console.log('等於10');
}
```

### 理解`for`循環的基本使用
`for`循環可以重複執行一段程式碼，直到指定的條件不再滿足為止。

- JavaScript 中的 `for` 循環和 C 語言中的 `for` 循環有點類似
- `for` 循環的結構是 `for (初始化; 條件; 更新) { ... }
- 但 `for` 也可以用於遍歷數組，這看起來也像 Python 中的 `for` 循環

```js
// 近似 C 語言中的 for 循環
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

const fruits = ['apple', 'banana', 'orange'];

// 這很像 Python 中的 for 循環
for (let fruit of fruits) {
    console.log(fruit);
}
```

#### 練習題
1. 使用`if...else`語句檢查一個變量是否大於10。 如果大於，打印“大於10”；否則，打印“小於或等於10”。
2. 使用`for`循環打印1到10之間的所有數字。

## 1.5 函數

### 定義和調用函數
函數是一段可以重複使用的程式碼塊。你可以通過`function`關鍵字來定義函數，並通過函數名來調用它。

### 參數和返回值的基礎
函數可以接受參數，並使用`return`關鍵字返回一個值。

```js
function functionName(parameter1, parameter2) {
    // 函數體
    return parameter1 + parameter2;
}
```

#### 練習題
1. 定義一個函數`sub`，接受兩個參數並返回它們的差。然後調用這個函數，並使用`console.log`打印結果。
