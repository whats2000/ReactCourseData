# 第4章：HTML5進階元素

## 4.1 結構性元素

HTML5引入了多個結構性元素，用以更好地描述網頁的布局和結構，這些元素包括：

- **`<header>`**：定義一個頁面或區塊的頭部區域。通常包含標題、導航鏈接或者一些開頭內容。
- **`<footer>`**：定義頁面或區塊的底部區域。經常包含版權信息、聯繫信息或者相關文檔的鏈接。
- **`<nav>`**：用於包含導航鏈接的區塊，幫助用戶瀏覽或導航到網站的其他頁面或部分。
- **`<article>`**：表示文檔、頁面或應用中獨立的、自成一體的內容。例如博客帖子或新聞文章。
- **`<section>`**：用於表示文檔中的一個章節或區塊，通常有一個標題。
- **`<aside>`**：表示一個與頁面內容相關的側邊欄，通常包含與主內容相關的附加信息。
- **`<main>`**：表示文檔的主要內容區域，通常是整個頁面的主要內容。
- **`<figure>`** 和 **`<figcaption>`**：用於包含圖片、圖表、照片等的區塊，`<figcaption>`用於定義圖片的標題。
- **`<div>`**：HTML5中仍然保留了`<div>`元素，用於定義文檔中的一個區塊，但是更多地使用新的結構性元素來替代`<div>`。

### 練習題
1. 創建一個網頁，使用`<header>`, `<nav>`, `<article>`, `<section>`, `<footer>`元素來結構化練習題目的內容。

## 4.2 圖形和媒體

HTML5同樣加強了對圖形和多媒體的支持，重要元素包括：

- **`<canvas>`**：用於通過JavaScript繪製圖形（如2D圖形或圖表）的容器。
- **`<svg>`**（Scalable Vector Graphics）：用於在HTML文檔中直接嵌入向量圖形。
- **`<audio>`**：用於在HTML文檔中嵌入音頻內容。`<source>`元素可以用來指定多種音頻格式來提高跨瀏覽器的兼容性。
- **`<video>`**：用於嵌入影片內容，同樣可使用`<source>`元素來指定多種影片格式。

### 練習題
1. 添加一個`<audio>`元素，包括控制按鈕，讓用戶能播放一段音樂。
2. 插入一個`<video>`元素，包括控制按鈕，讓用戶能觀看一段影片。
