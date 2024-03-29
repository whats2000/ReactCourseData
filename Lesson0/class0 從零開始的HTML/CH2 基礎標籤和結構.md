# 第2章：基礎標籤和結構

## 2.1 基本結構

- **HTML** 
  - 是一種基於Mark Up語言的超文本標記語言，用於創建網頁和網頁應用。HTML通過標籤來標示文檔的結構和內容，並且可以嵌入其他類型的資源，如CSS和JavaScript。


- **標籤** 
  - HTML中最基本的元素，用於標示文檔中的不同部分。標籤通常是成對出現的，包括開始標籤和結束標籤，中間包含了標籤所定義的內容。
  - 例如：`<p>`標籤用於定義一個段落，`<img>`標籤用於插入一個圖片，`<a>`標籤用於定義一個鏈接。
  - 標籤必須遵循嚴格的語法規則，包括大小寫敏感、屬性的引號和標籤的合法嵌套等。
  - 標籤必須要閉合`<p></p>`，或者是自閉合的，如`<img />`標籤。


- **屬性** 
  - 是標籤的附加信息，用於定義標籤的行為和外觀。屬性通常包括名稱和值，如`<img src="image.jpg">`中的`src`就是一個屬性，用於指定圖片的路徑。


每個HTML文檔都有一個標準的基本結構，包括以下幾個主要部分：

- `<!DOCTYPE html>`：聲明文檔類型，告訴瀏覽器這是一個HTML5文檔。
- `<html>`：這個標籤包圍了整個HTML文檔的內容。
- `<head>`：包含了文檔的元數據（metadata），如文檔的標題（`<title>`）、字符集聲明（`<meta charset="utf-8">`）、外部鏈接CSS文件（`<link>`）和JavaScript文件（`<script>`）等。
- `<body>`：包含了網頁的可見內容，如文本、圖像、視頻、表單等。

```html
<!DOCTYPE html>
<html>
<head>
    <title>標題</title>
</head>
<body>
    <!-- 網頁內容 -->
</body>
```

### 練習題
1. 創建一個HTML文檔，設置文檔類型為HTML5，並添加標題為"我的第一個網頁"。

## 2.2 文本格式化

HTML提供了多種標籤來格式化文本，使其具有不同的視覺效果：

- `<h1>`至`<h6>`：這些標籤表示六級標題，`<h1>`是最高級別的標題，通常用於網頁的主標題。`<h2>`至`<h6>`用於不同層級的子標題。
- `<p>`：表示一段文本。
- `<strong>`：將文本顯示為粗體，用於表示文本的重要性。這可以放在`<p>`標籤內，也可以放在其他標籤內。
- `<em>`：將文本顯示為斜體，用以強調文本。同樣可以放在`<p>`標籤內，也可以放在其他標籤內。

```html
<h1>主標題</h1>
<p>這是一段文本，<strong>這裡的文字很重要</strong>，這裡的文字<em>需要強調</em>。</p>
```

### 練習題
1. 創建一個HTML文檔，包含一個`<h1>`標題和幾段文本，使用`<p>`, `<strong>`, `<em>`來格式化這些文本。

## 2.3 連結和圖像

連結和圖像是網頁中最常用的元素之一，它們分別通過`<a>`和`<img>`標籤來實現：

- `<a href="URL">`：創建一個指向另一個頁面或網站的超鏈接。`href`屬性指定了鏈接的目的地。
- `<img src="圖像地址" alt="替代文本">`：嵌入一個圖像。`src`屬性指定圖像的路徑，`alt`屬性提供圖像的替代文本，用於圖像無法顯示時或視障用戶使用閱讀器瀏覽網頁時。

```html
<a href="https://www.example.com">這是一個超鏈接</a>
<img src="https://www.example.com/image.jpg" alt="圖像替代文本">
```

### 練習題
1. 在HTML文檔中添加一個指向 "https://www.nsysu.edu.tw/?Lang=zh-tw" 的超鏈接，並設置連結文本為"國立中山大學"。
2. 嵌入一個圖像，網址是 "https://www.nsysu.edu.tw/static/file/0/1000/img/526/logo.png" 並提供一個適當的替代文本"NSYSU Logo"。
