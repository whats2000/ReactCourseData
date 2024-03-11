# React 入門介紹 - 課程 0
歡迎來到React的世界！本課程旨在為完全沒有React經驗的學生提供一個全面的入門指南。我們將從最基本的概念開始，逐步深入，以確保你能夠獲得堅實的React基礎。

## 什麼是 React？

* React是一個由Meta (Facebook) 開發並維護的開源JavaScript庫，用於構建用戶界面（UI）。它使得創建互動式、狀態驅動的Web應用變得既簡單又快速。
* 在此之上，隨者 React Native 的出現，React 也能夠用於構建原生移動應用。

![React Logo](images/logo192.png)

## React的核心概念

- **組件（Components）**：React應用由多個組件構成，每個組件負責渲染應用的一小部分UI。
- **JSX**：一種語法擴展，讓你在JavaScript程式碼中能夠寫類似HTML的標記。
- **狀態（State）**和**屬性（Props）**：組件的兩個核心概念，用於控制組件渲染的內容。
- **生命週期方法（Lifecycle Methods）**：特定時期自動被調用的組件方法，用於執行程式碼和管理組件的生命週期。

## 為什麼學習 React？

React的設計哲學和強大的功能集，使其成為當今Web開發的首選技術之一：

- **高效**：React通過虛擬DOM來最小化真實DOM的操作，提高應用性能。
- **靈活**：React可以與其他庫或框架（如React Router、React Bootstrap等）無縫集成，滿足不同項目的需求。
- **生態系統**：豐富的社區、工具和庫使得開發React應用更加容易和高效。(把想要效果 + React 搜尋，然後就像 pip 一樣安裝即可)
- **與業界接軌**：根據 JetBrains 的調查，React 是 2024 年最受歡迎的前端框架。

![JavaScript Framework - Rank](https://blog.jetbrains.com/wp-content/uploads/2024/02/Frameworks-and-libraries-1.png)
圖片來源 https://blog.jetbrains.com/webstorm/2024/02/js-and-ts-trends-2024/

![Javascript Framework - Stars](images/rank.png)
目前 React 在 2023 年後超越 Vue，成為最受歡迎的前端框架。

圖片來源 https://ossinsight.io/collections/javascript-framework/![img.png](img.png)

## 實際案例演示：學校選課助手

為了更好地理解React在實際開發中的應用，我將在本課程中介紹一個我自己開發的項目 —— 學校選課助手。這個應用展示了React的強大功能，以及如何使用React來構建互動式和用戶友好的Web應用。

### 選課助手的功能特點：

- **用戶界面**：採用React構建，提供清晰直觀的操作體驗，相比第四代純JavaScript版本，性能大幅提升。
- **動態數據處理**：利用React的狀態管理（State）和生命週期方法（Lifecycle Methods）實時更新課程篩選結果。
- **互動性**：通過事件處理（如點擊、過濾）實現與用戶的互動。
- **數據驅動**：展示如何使用Props傳遞數據，以及如何將外部數據集成到React應用中。

### 項目地址
- [中山大學選課助手5.0](https://whats2000.github.io/CourseSelectorHelperReact/)
- [項目源碼](https://github.com/whats2000/CourseSelectorHelperReact)

  ![選課助手](images/banner.svg)

## 開始之前

在深入React之前，建議具備以下基礎知識：

- **HTML/CSS**：瞭解基本的標記和樣式是創建Web應用的基礎。
- **JavaScript**：React是一個JavaScript庫，因此熟悉JavaScript（特別是ES6+的新特性）是必須的。

### 需要安裝的軟件
- [Node.js](https://nodejs.org/en/)：React應用的開發環境需要Node.js。
- 檢查Node.js是否安裝成功：在終端中運行 `node -v` 和 `npm -v`，如果能夠顯示版本號，則表示安裝成功。
- Node.js 就像 Python 一樣，是一個運行時環境，可以讓你不用瀏覽器就能運行 JavaScript。
- Node.js 安裝成功後，會自動安裝 npm（Node Package Manager）。就像 Python 安裝成功後會自動安裝 pip 一樣。
  ```shell
  node -v
  ```
  ![Node Install](images/node.png)
  
  如果已安裝，確保你的 Node.js 版本是 20.0.0 或更高版本。因為我們有部分package需要使用新特性。

### 開發工具
- **編輯器**：
  - 使用 [Visual Studio Code](https://code.visualstudio.com/) 作為開發工具。
  - 使用 [WebStorm](https://www.jetbrains.com/webstorm/) 作為開發工具。
- **輔助工具**：
  - 安裝 [React Developer Tools](https://react.dev/learn/react-developer-tools)
- **VS Code Extension**：
  - 安裝 [實用插件](https://www.syncfusion.com/blogs/post/react-vs-code-extensions.aspx) 來幫助開發。

![Rank of tool](https://blog.jetbrains.com/wp-content/uploads/2024/02/Popular-JS-TS-tools-1.png)
圖片來源 https://blog.jetbrains.com/webstorm/2024/02/js-and-ts-trends-2024/

## 接下來的步驟

以下是本次課程的大綱：
- class1: JavaScript ES6, ES7的語法介紹
  1. 在這個小節中，我們將介紹一些ES6和ES7的新特性，這些特性在React開發中非常有用。
  2. 額外補充：TypeScript介紹 (因為越來越多的React項目開始使用TypeScript開發)
- class2: 了解 React 的基本概念
  1. 在這個小節中，我們將介紹React的基本概念，這能更好理解React的運作原理。並與DOM操作做比較。
  2. 在這個小節中，我們將實際演示
- class3: 引入 JSX 和 Babel
  1. 在這個小節中，我們將介紹如何在React中使用JSX，這是React開發中的一個重要概念。
  2. 在這個小節中，我們將介紹如何在JSX中動態注入數據，你需要掌握到底能注入哪些數據。

# 參考資料
- [React 官方網站](https://reactjs.org/)