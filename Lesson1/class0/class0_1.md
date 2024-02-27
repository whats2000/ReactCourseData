# React 入門介紹 - 課程 0 複習基礎 HTML

## 回顧 HTML、CSS 和 JavaScript

- **HTML**：超文本標記語言，用於構建Web頁面的結構。
- **CSS**：層疊樣式表，用於為Web頁面添加樣式和佈局。
- **JavaScript**：一種用於網頁開發的腳本語言，用於實現互動性和動態效果。

### HTML

- HTML是一種標記語言，用於描述Web頁面的結構。
- 其特徵是使用標籤（Tag）來標記不同的元素，如`<h1>`、`<p>`、`<div>`等。
- 並且需要遵循嚴格的標籤嵌套規則，以確保頁面的結構正確。
- 此外，標籤還可以包含屬性（Attributes），用於定義元素的特性，如`id`、`class`、`style`等。
- HTML 標籤需要閉合，如`<p>...</p>`、`<div>...</div>`。或者自閉合，如`<img />`、`<br />`。

```html
<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
  <style>
    body {
      background-color: lightblue;
    }
  </style>
</head>
<body>
  <h1>This is a Heading</h1>
  <p>This is a paragraph.</p>
  <!-- 這是註解方式 -->
</body>
</html>
```
在這個例子中，`<html>`、`<head>`、`<title>`、`<style>`、`<body>`、`<h1>`、`<p>`都是HTML標籤。
`<!DOCTYPE html>` 是聲明文件類型的標籤，`<!-- ... -->` 是HTML的註釋。

### CSS

- CSS用於為Web頁面添加樣式和佈局。
- 其特徵是使用選擇器（Selector）來選擇元素，並使用屬性（Property）和值（Value）來定義樣式。
- CSS樣式可以直接寫在HTML文件中，也可以寫在獨立的CSS文件中，然後通過`<link>`標籤引入。
- 選取器可以是元素名、類名、ID名，也可以是元素的屬性等。
  - 元素名選擇器：`p`、`h1`、`div`等元素名。
  - 類名選擇器：`.class`命名的選擇器。
  - ID名選擇器：`#id`命名的選擇器。
  - 屬性選擇器：`[attribute]`、`[attribute=value]`等。
  - 指定元素選擇器：`div p`、`div > p`等。

```css
/* 這是一個CSS樣式文件 */
p {
  background-color: lightblue;
}

.style1 {
  color: red;
  font-size: 20px;
}

#one {
  height: calc(100vh - 100px);
}

input[type="text"] {
  &:hover {
    background: aliceblue;
  }
}

div > p {
  color: blue;
}

/* 也可混和選取，如下，匹配所有擁有class1的div元素 */
div.class1 {
    color: red;
}
```
在這個例子中
- `p` 是元素選擇器，`background-color` 是屬性，`lightblue` 是值。這會作用於所有的 `<p>` 元素，並將其背景顏色設置為淺藍色。
- `.style1` 是類名選擇器，`color` 和 `font-size` 是屬性，`red` 和 `20px` 是值。這會作用於所有使用 `.style1` 類的元素。如 `<p class="style1">`。
- `#one` 是ID名選擇器，`height` 是屬性，`calc(100vh - 100px)` 是值。用來計算元素的高度。這會作用於所有使用 `id="one"` 的元素。如 `<p id="one">`。
- `input[type="text"]` 是屬性選擇器，`&:focus` 是擴展選擇器。這會作用於所有的 `<input type="text">` 元素，並在鼠標懸停時改變背景顏色。
- `div > p` 是指定元素選擇器。這會作用於所有的 `<div>` 元素下的 `<p>` 元素。有使用 `>` 符號來指定一定要有父子關係。若不使用 `>` 符號，則會作用於所有的 `<div>` 元素下的 `<p>` 元素。

### JavaScript

- JavaScript是一種腳本語言，用於實現Web頁面的互動性和動態效果。
- 其特徵是使用變量（Variable）、運算符（Operator）、函數（Function）等來實現程式的邏輯。
- 由於JavaScript是一種動態語言，因此它可以在瀏覽器中直接執行，並且可以與HTML和CSS進行無縫集成。
- JavaScript可以用於實現事件處理、動畫效果、數據加載、表單驗證等功能。
- JavaScript使用`<script>`標籤來引入，可以直接寫在HTML文件中，也可以寫在獨立的JS文件中，然後通過`<script src="...">`標籤引入。

```javascript
// 這是一個JavaScript腳本文件
function changeColor() {
  document.getElementById("demo").style.color = "red";
}

var x = 5;
var y = 6;

document.getElementById("demo").innerHTML = x + y;
```

在這個例子中
- `changeColor` 是一個函數，用於改變 `id="demo"` 的元素的文字顏色。
- `var x = 5;` 和 `var y = 6;` 是變量聲明，用於定義變量 `x` 和 `y`。

## 總結
- HTML、CSS 和 JavaScript 是Web開發的三大基石，它們分別負責頁面結構、樣式和互動效果。
- 這三種技術通過標記語言、樣式表和腳本語言的方式，共同構建了Web頁面的外觀和功能。
- 了解這三種技術的基本概念和用法，對於理解React的運作原理和開發React應用是非常有幫助的。
- 在React開發中，我們會使用JSX語法來描述UI組件，並使用CSS來定義樣式，使用JavaScript來實現邏輯。因此，對這三種技術的熟悉將有助於你更好地學習和應用React。
