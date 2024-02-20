# React 入門介紹 - 課程 0

歡迎來到React的世界！本課程旨在為完全沒有React經驗的學生提供一個全面的入門指南。我們將從最基本的概念開始，逐步深入，以確保你能夠獲得堅實的React基礎。

## 什麼是 React？

* React是一個由Facebook開發並維護的開源JavaScript庫，用於構建用戶界面（UI）。它使得創建互動式、狀態驅動的Web應用變得既簡單又快速。
* 在此之上，隨者 React Native 的出現，React 也能夠用於構建原生移動應用。

## React的核心概念

- **組件（Components）**：React應用由多個組件構成，每個組件負責渲染應用的一小部分UI。
- **JSX**：一種語法擴展，讓你在JavaScript代碼中能夠寫類似HTML的標記。
- **狀態（State）**和**屬性（Props）**：組件的兩個核心概念，用於控制組件渲染的內容。
- **生命週期方法（Lifecycle Methods）**：特定時期自動被調用的組件方法，用於執行代碼和管理組件的生命週期。

## 為什麼學習 React？

React的設計哲學和強大的功能集，使其成為當今Web開發的首選技術之一：

- **高效**：React通過虛擬DOM來最小化真實DOM的操作，提高應用性能。
- **靈活**：React可以與其他庫或框架（如Redux或MobX）結合使用，以管理應用的狀態。
- **生態系統**：豐富的社區、工具和庫使得開發React應用更加容易和高效。

## 開始之前

在深入React之前，建議具備以下基礎知識：

- **HTML/CSS**：瞭解基本的標記和樣式是創建Web應用的基礎。
- **JavaScript**：React是一個JavaScript庫，因此熟悉JavaScript（特別是ES6+的新特性）是必須的。

### 需要安裝的軟件
- [Node.js](https://nodejs.org/en/)：React應用的開發環境需要Node.js。
- 檢查Node.js是否安裝成功：在終端中運行 `node -v` 和 `npm -v`，如果能夠顯示版本號，則表示安裝成功。
  ```shell
  node -v
  ```

## 實際案例演示：學校選課助手

為了讓你們更好地理解React在實際開發中的應用，我將在本課程中介紹一個我自己開發的項目 —— 學校選課助手。這個應用展示了React的強大功能，以及如何使用React來構建互動式和用戶友好的Web應用。

### 選課助手的功能特點：

- **用戶界面**：採用React構建，提供清晰直觀的操作體驗，相比第四代純JavaScript版本，性能大幅提升。
- **動態數據處理**：利用React的狀態管理（State）和生命週期方法（Lifecycle Methods）實時更新課程篩選結果。
- **互動性**：通過事件處理（如點擊、過濾）實現與用戶的互動。
- **數據驅動**：展示如何使用Props傳遞數據，以及如何將外部數據集成到React應用中。

### 項目地址
- [中山大學選課助手5.0](https://whats2000.github.io/CourseSelectorHelperReact/)
- [項目源碼](https://github.com/whats2000/CourseSelectorHelperReact)

## 接下來的步驟

以下是本次課程的大綱：
- class1: JavaScript ES6, ES7的語法介紹
  - 在這個小節中，我們將介紹一些ES6和ES7的新特性，這些特性在React開發中非常有用。
  - 額外補充：TypeScript介紹 (因為越來越多的React項目開始使用TypeScript開發)
- class2: 了解 React 的基本概念
  - 在這個小節中，我們將介紹React的基本概念，這能更好理解React的運作原理。並與DOM操作做比較。
- class3: 使用 JSX
  - 在這個小節中，我們將介紹如何在React中使用JSX，這是React開發中的一個重要概念。
- class4: 在 JSX 中動態注入數據
  - 在這個小節中，我們將介紹如何在JSX中動態注入數據，你需要掌握到底能注入哪些數據。

# 參考資料
- [React 官方網站](https://reactjs.org/)
