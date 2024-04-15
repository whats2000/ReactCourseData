# 第二章：類別組件宣告

在本章中，我們將深入學習如何使用類別組件來構建React應用的不同部分。類別組件通過擴展`React.Component`
類來創建，提供了內部狀態管理和訪問生命週期方法的能力。

## 2.1 類別組件的基本結構

一個React類別組件至少包含一個`render()`方法，這個方法返回需要渲染到DOM中的React元素。

以下是一個基本的類別組件結構：

```tsx
import { Component } from 'react';

class MyComponent extends Component {
  render() {
    return (
      <div>Hello, World!</div>
    );
  }
}

export default MyComponent;
```

## 2.2 組件建構步驟

### 2.2.1 組件的定義

- 定義組件名稱：
    - 組件名在使用時必須以大寫字母開頭。這是因為React將小寫字母開頭的組件視為普通HTML標籤。
    - [補充] 事實上你定義時可以不用大寫字母開頭，甚至可以是匿名類別(即不定義名稱)
      ，但是在引入時依然需改成大寫字母開頭，但為了統一，建議還是大寫字母開頭。使定義與引入時統一。
- 建立檔案：
    - 建立一個新的檔案在`src/components`資料夾中，檔名為`MyComponent.tsx`。
    - `tsx` 尾碼表示這是一個包含JSX語法的TypeScript檔案。
    - 尾碼是否加上`x`，不會影響程式碼的執行，但是為了方便開發者辨識，建議加上。
    - 大部分公司會要求在有JSX語法的檔案中加上`x`。(不是整個專案，只是有JSX語法的檔案)
      ```tsx
      src/
        components/
          MyComponent.tsx
      ```
- 導入Component：
    - 首先，我們需要導入React庫中的`Component`類。
    - 在 React 17 之後，我們可以不用再寫`import React from 'react';`，這簡化很多。(
      如果你導入反而會觸發tslint的no-unused-variable)
      ```tsx
      import { Component } from 'react';

- 類別定義：通過繼承[React.Component](https://react.dev/reference/react/Component)來創建一個新的類別。
    - 回憶起繼承的概念，這裡的`MyComponent`類別繼承了`Component`類。
    - [補充] 此外除了`React.Component`
      ，還可以繼承自[React.PureComponent](https://react.dev/reference/react/PureComponent)
      ，這兩者的差異在於`PureComponent`會自動執行`shouldComponentUpdate`方法，來判斷是否需要重新渲染。
      ```tsx
      class MyComponent extends Component {
  
      }
      ```
- render方法：
    - 每個類別組件都必須有一個`render()`方法。
    - 他需要返回一個React元素，描述了組件在頁面上應當呈現的內容。
    - 即便是空的，也要一定要有返回值，如返回`null`。
      ```tsx
      class MyComponent extends Component {
        render() {
          return (
            <div>Hello, World!</div>
          );
         }
      }
      ```
- 導出組件：
    - 定義完組件後，使用`export default`語句導出，以便在其他文件中使用該組件。
    - JavaScript模塊導出的標準方式，如果你不導出，則無法在其他文件中使用。
      ```tsx
      export default MyComponent;
      ```

### 2.2.2 組件的使用

- 引入組件：
    - 在需要使用組件的地方，使用`import`語句引入組件。
    - 引入時，組件名稱必須以大寫字母開頭。
      ```tsx
      import MyComponent from './components/MyComponent';
      ```
- 使用組件：
    - 在JSX中，使用`<MyComponent />`標籤來使用組件。
    - 你可以將組件視為一個自定義的HTML標籤。
    - 可以多次使用同一個組件，但是會被視為不同的實例。(也就是說，使用都會產生一個新的實例)
      ```tsx
      class App extends Component {
        render() {
          return (
            <div>
              <MyComponent />
              <MyComponent />
              <MyComponent />
            </div>
          );
        }      
      }
      ```

## 2.3 組件的組織

為了保持程式碼的清晰和可管理性，建議將組件放在專門的文件夾中，通常是`src/components`。
這樣做不僅有助於維護，也使組件更容易被重用。

以下是一個組件的組織結構示例：

```
src/
  components/
    Header.tsx
    Content.tsx
    Footer.tsx
    
  App.tsx
  main.tsx
```

## 2.4 練習：創建基本組件

讓我們應用這些知識來創建幾個基本組件：`Header`、**三個**`Content`和`Footer`。

### 2.4.1 創建一個Header組件

請寫一個名稱是`Header`的組件，讓他渲染一個`<header>`元素，並在其中包含一個`<h1>`元素。

```html

<header>
    <h1>Welcome to Our Website</h1>
</header>
```

### 2.4.2 創建一個Content組件

請寫一個名稱是`Content`的組件，讓他渲染一個`<div>`元素，並在其中包含一個段落元素。

```html

<div>
    <p>This is the main content section of the page. Here you can find various information and articles.</p>
</div>
```

### 2.4.3 創建一個Footer組件

請寫一個名稱是`Footer`的組件，讓他渲染一個`<footer>`元素，並在其中包含一個段落元素。

```html

<footer>
    <p>© 2024 Company Name. All rights reserved.</p>
</footer>
```

### 2.4.4 將組件組合在一起

回到`App`組件，將`Header`、`Content`和`Footer`組件組合在一起。
