# 第三章：在JSX中使用樣式

在React開發中，對元素進行樣式化是創建引人注目且具有良好用戶體驗界面的關鍵。然而，在JSX中使用樣式與在普通HTML中使用CSS有一些重要的區別。本章將針對這些區別進行解釋，幫助初學者更好地理解如何在React應用中運用樣式。

## 3.1 內聯樣式

內聯樣式是直接在JSX元素中透過`style`屬性添加CSS樣式的方法。
- 不同於普通HTML中`style`屬性接受一個字符串，JSX要求`style`屬性的值為一個對象
- 該對象的鍵是camelCase(小駝峰)版本的CSS屬性名，值是CSS屬性值作為字符串。
  - 例如，`backgroundColor`代替`background-color`。
- 如果CSS屬性值是數字，則會自動添加單位（如px）。
  - 例如，`width: 300`會被解釋為`width: "300px"`。
- 如果需要其他單位，則應將值作為字符串。
  - 例如，`fontSize: "0.5rem"`。

### 示例分析
```jsx
const divStyle = {
  color: 'blue',
  backgroundColor: 'lightgray',
};

const element = <div style={divStyle}>Hello, world!</div>;
```
以上等同於
```html
<div style="color: blue; background-color: lightgray;">Hello, world!</div>
```

在這個例子中，我們首先定義了一個名為`divStyle`的JavaScript對象來存儲我們的樣式。然後，我們將這個對象作為`style`屬性的值傳遞給`<div>`元素。

### 練習題
1. 創建一個內聯樣式，將一個`<p>`元素的文字顏色設為綠色，並將背景色設為黃色。
2. 創建一個內聯樣式，將一個`<button>`元素的寬度設為200px，高度設為50px。並加粗文字 (font-weight: bold;)

## 3.2 使用類名

在JSX中，你仍然可以通過`className`屬性來應用CSS類樣式。
- 需要注意的是，由於`class`是JavaScript的保留字，因此JSX使用`className`來指定CSS類。
  - 純粹因為`class`是JavaScript的類別建立宣告保留字，所以在JSX中使用`className`。

### 示例分析

在 css 文件中
```css
.textStyle {
  color: red;
  font-size: 20px;
}
```

使用時
```jsx
const element = <div className="textStyle">Hello, world!</div>;
```

在這個例子中，我們首先在一個CSS文件中定義了一個名為`.textStyle`的類，然後在JSX中透過`className`屬性將其應用於`<div>`元素。

### 練習題
1. 把前一題的內聯樣式改為使用類名的方式。記得 css 要寫在 `<style>` 標籤中。

## 3.3 動態樣式

JSX允許你根據條件動態設置樣式。這在React應用中非常有用，因為你可以根據應用的狀態來改變元素的樣式。

### 使用JavaScript表達式設定內聯樣式

```jsx
const divStyle = {
  color: 'blue',
  backgroundColor: isLoading ? 'yellow' : 'green',
};

const element = <div style={divStyle}>Hello, world!</div>;
```

### 使用JavaScript表達式設定類名

```css
.loading {
  color: blue;
  background-color: yellow;
}

.loaded {
  color: blue;
  background-color: green;
}
```

```jsx
const className = isLoading ? 'loading' : 'loaded';

const element = <div className={className}>Hello, world!</div>;
```

### 練習題
1. 根據變量`isError`的布爾值，動態更改一個`<p>`元素的文字顏色。
   - 如果`isError`為`true`，設置文字顏色為紅色，表示錯誤信息；
   - 如果為`false`，設置為黑色，表示正常信息。使用內聯樣式來完成此練習。
2. 給定一個用戶級別`level`，根據不同的用戶級別設置一個`<div>`元素的背景色。
   - 如果`level`為`1`，設置背景色為綠色；
   - 如果為`2`，設置為黃色；
   - 如果為`3`，設置為紅色。
   - 其他情況設置為灰色。
     


