# 第3章：列表、表格和表單

## 3.1 列表

列表在網頁中用於展示項目集合，HTML提供了三種類型的列表：

- **無序列表`<ul>`**：使用圓點作為列表項目的標記。適用於項目的順序不重要的情況。
- **有序列表`<ol>`**：使用數字作為列表項目的標記。適用於項目的順序重要的情況。
- **定義列表`<dl>`**：用於展示名稱/值對，如詞彙列表及其定義。`<dt>`用於表示詞彙，`<dd>`用於表示詞彙的定義。

```html
<!-- 無序列表 -->
<ul>
    <li>Car</li>
    <li>Plane</li>
    <li>Ship</li>
</ul>

<!-- 有序列表 -->
<ol>
    <li>Step 1</li>
    <li>Step 2</li>
    <li>Step 3</li>
</ol>

<!-- 定義列表 -->
<dl>
    <dt>Apple</dt>
    <dd>A fruit</dd>
    <dt>Banana</dt>
    <dd>Another fruit</dd>
</dl>
```

### 練習題

1. 創建一個包含三種水果的無序列表。Apple, Banana, Orange
2. 創建一個有序列表，列出你完成日常任務的步驟。起床、刷牙、吃早餐。

## 3.2 表格

表格用於展示結構化的數據，HTML中創建表格的標籤包括：

- **`<table>`**：定義一個表格。
- **`<tr>`**（table row）：定義表格中的一行。
- **`<td>`**（table data）：定義行中的單元格，用於存放數據。
- **`<th>`**（table header）：定義表格頭部的單元格，通常用於描述數據的類型。
- **`<thead>`**：定義表格的頭部區域。
- **`<tbody>`**：定義表格的主體部分。
- **`<tfoot>`**：定義表格的尾部區域，通常包含匯總或結論信息。

```html
<table>
    <thead>
        <tr>
            <th>表頭1</th>
            <th>表頭2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>數據1</td>
            <td>數據2</td>
        </tr>
        <tr>
            <td>數據3</td>
            <td>數據4</td>
        </tr>
    </tbody>
</table>
```

### 練習題

1. 創建一個表格，展示這兩本書，包括書名、作者和閱讀時間。

| 書名    | 作者      | 閱讀時間    |
|-------|---------|---------|
| Book1 | Author1 | 1 hour  |
| Book2 | Author2 | 2 hours |

## 3.3 表單

表單用於收集用戶輸入的數據，HTML中與表單相關的標籤包括：

- **`<form>`**：定義一個表單，包含表單元素和表單控件。
- **`<label>`**：定義表單控件的標籤。每個輸入控件都應該有一個對應的標籤，用於描述輸入控件的用途。用`for`屬性指定與輸入控件的`id`屬性相同的值。
- **`<input>`**：定義輸入字段，其`type`屬性可以有多種值，如`text`、`password`、`submit`等。
- **`<textarea>`**：定義多行文本輸入控件。
- **`<button>`**：定義按鈕。
- **`<select>`**：定義下拉列表，`<option>`用於定義下拉列表中的選項。

```html
<form>
    <!-- 短文本輸入框 -->
    <label for="exampleText">id 是 exampleText 的標籤: </label>
    <input type="text" id="exampleText" name="exampleText">
    
    <!-- 大文本輸入框 -->
    <label for="exampleTextarea">大文本輸入框: </label>
    <textarea id="exampleTextarea" name="exampleTextarea"></textarea>
    
    <!-- 下拉列表 -->
    <label for="exampleSelect">下拉列表: </label>
    <select id="exampleSelect" name="exampleSelect">
        <option value="option1">選項1</option>
        <option value="option2">選項2</option>
        <option value="option3">選項3</option>
    </select>
    
    <!-- 送出按鈕 -->
    <input type="submit" value="Submit">
</form>
```

### 練習題

1. 創建一個表單，包括姓名、電子郵件地址輸入框和一個提交按鈕。
2. 在表單中添加一個下拉列表，讓用戶選擇他們最喜歡的編程語言。