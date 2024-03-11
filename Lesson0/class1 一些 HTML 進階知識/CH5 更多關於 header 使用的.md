# 更多關於 header 使用的

## 5.1 header 的其他作用

- `<head>` 元素是HTML文檔的一個重要部分，它包含了文檔的元（meta）數據、標題、引入的樣式表和腳本等信息。
- `<meta>` 元素用於指定網頁編碼、網頁的描述、關鍵字、作者等信息。
  - charset 屬性用於指定文檔的字符集。
  - name 屬性用於指定元數據的名稱。
  - content 屬性用於指定元數據的內容。
  - description、keywords、author 等都是常見的元數據。

```html
<head>
    <!-- 說明網頁編碼 -->
    <meta charset="UTF-8">
    
    <!-- 設置網頁標題 -->
    <title>示例網頁</title>
    
    <!-- 設置網頁描述 -->
    <meta name="description" content="這是一個示例網頁">
    
    <!-- 設置網頁關鍵字，用逗號分隔，目的是讓搜索引擎更好地理解網頁的內容 -->
    <meta name="keywords" content="示例, 網頁, HTML">
    
    <!-- 設置網頁作者 -->
    <meta name="author" content="你的名字">
</head>
```

## 5.2 引入CSS

CSS（Cascading Style Sheets）樣式表用於控制網頁的布局和外觀。通過將CSS與HTML分開，你可以更加靈活地設計網頁，同時保持內容的結構化。在`<head>`部分引入外部CSS樣式表的標準方法是使用`<link>`標籤。

### 示例

```html
<head>
    <meta charset="UTF-8">
    <title>示例網頁</title>
    
    <!-- 引入外部CSS檔案 -->
    <link rel="stylesheet" href="path/to/your-stylesheet.css">
</head>
```

`href`屬性指定了CSS檔案的位置，而`rel="stylesheet"`表明該檔案的關係（relation）為樣式表。

## 5.3 引入JavaScript

JavaScript用於增強網頁的交互性和動態功能。在`<head>`部分引入JavaScript腳本通常使用`<script>`標籤。雖然將腳本放在`<head>`部分會在HTML內容加載之前加載和執行腳本，但這有時會延遲網頁的顯示。因此，除非特定需要，否則推薦將腳本放在`<body>`標籤的底部。

### 示例

```html
<head>
    <meta charset="UTF-8">
    <title>示例網頁</title>
    <!-- 引入外部JavaScript檔案 -->
    <script src="path/to/your-script.js"></script>
</head>
```

`src`屬性指定了JavaScript檔案的位置。當需要在頁面加載的早期階段就運行某些腳本時，將腳本放在`<head>`中是有用的。例如，現代的JavaScript框架和庫（如React）可能要求你這樣做以初始化應用。
