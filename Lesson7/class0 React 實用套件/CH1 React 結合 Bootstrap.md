# 第一章：React 結合 Bootstrap

## 1.1 安裝 React-Bootstrap

### 1.1.1 什麼是 Bootstrap

Bootstrap 是一個開源的前端框架，用於快速開發響應式和移動優先的網站。它提供了豐富的 CSS 和 JavaScript 元素，如網格系統、排版、表單、按鈕、導航等，使開發者能夠輕鬆創建一致且美觀的用戶界面。

### 1.1.2 安裝 React-Bootstrap 和 Bootstrap

React-Bootstrap 是一個用於在 React 應用中使用 Bootstrap 樣式的套件。它提供了與 Bootstrap 元素對應的 React 組件，使我們可以更加方便地在 React 中使用 Bootstrap 的樣式和功能。

- React-Bootstrap 官網：[https://react-bootstrap.github.io/](https://react-bootstrap.github.io/)
- Bootstrap 官網：[https://getbootstrap.com/](https://getbootstrap.com/)

### 安裝方式

首先，通過 npm 或 Yarn 安裝 React-Bootstrap 和 Bootstrap：

```bash
# 使用 npm 安裝
npm install react-bootstrap bootstrap

# 使用 Yarn 安裝
yarn add react-bootstrap bootstrap
```

註: 視你的專案環境而定，我們使用 yarn 作為套件管理工具，所以我們使用 yarn 來安裝套件。

### 1.1.3 引入 Bootstrap CSS

在你的 React 應用的入口文件（例如 `main.tsx` 或 `index.tsx`）中引入 Bootstrap 的 CSS 文件：

```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
```

### 1.1.4 使用方法

React-Bootstrap 提供了一個與 Bootstrap 5 一起使用的組件庫，可以通過 `import` 來引入所需的組件。

```tsx
import { Button } from 'react-bootstrap';

const MyComponent = () => {
  return <Button variant="primary">Primary Button</Button>;
};
```

在這個例子中，我們引入了 `Button` 組件，這是一個 Bootstrap 按鈕的 React 封裝。

其等效於以下 TSX 程式碼，註: 這裡的 `className` 中是 Bootstrap 的 CSS 類名：

```tsx
const MyComponent = () => {
  return <button className="btn btn-primary">Primary Button</button>;
};
```

除了將樣式應用於組件之外，React-Bootstrap 還提供了一些其他功能，例如模態框、導航欄、表單等。
- 這些與原生 Bootstrap 組件相似，但是使用 React-Bootstrap 的組件可以更好地與 React 應用集成。
- 下方將介紹一些常用的 React-Bootstrap 組件，並提供一些基本的使用示例。

## 1.2 基本語法與使用

### 1.2.1 使用 React-Bootstrap 組件

React-Bootstrap 提供了許多預定義的組件，可以直接使用來構建你的 UI。這些組件包括按鈕、表單、導航欄等。

### 基本範例

以下是一個簡單的範例，展示了如何使用 React-Bootstrap 組件來構建一個基本的頁面：

```tsx
import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Hello, React-Bootstrap!</h1>
          <Button variant="primary">Primary Button</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
```

在這個範例中，我們使用了 `Container`、`Row` 和 `Col` 組件來構建一個網格佈局，並使用 `Button` 組件來顯示一個 Bootstrap 按鈕。

## 1.3 常用組件實作

### 1.3.1 使用 NavBar 組件

NavBar 組件可以用來構建導航欄：

```tsx
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
```

### 1.3.2 使用 Modal 組件

Modal 組件可以用來顯示模態框：

- 與一般的 HTML 模態框不同，React-Bootstrap 的 Modal 組件是一個受控組件，需要通過 `show` 和 `onHide` 屬性來控制顯示和隱藏。
- 簡單來說，`show` 屬性用於控制模態框的顯示狀態，`onHide` 屬性用於設置關閉模態框的回調函數。

```tsx
import { Button, Container, Modal } from "react-bootstrap";
import { useState } from "react";

export const ModalDialogSample = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Container className="d-flex p-5 align-items-center justify-content-center">
        <Button variant="primary" onClick={() => setShow(true)}>
          Show Modal
        </Button>
      </Container>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
```

## 1.4 練習題

創建一個包含導航欄、卡片和模態框的頁面，並實現模態框的開啟與關閉。要求使用 React-Bootstrap 組件完成以下任務：

1. 使用 NavBar 組件創建導航欄。
2. 使用 Card 組件顯示多個卡片，每個卡片包含標題和內容。
3. 使用 Modal 組件創建模態框，並在按鈕點擊時顯示模態框。

### 提示步驟

1. 移動到你的 React 專案目錄 ('/CH1 練習題')。
2. 創建一個新的 vite 專案：`yarn create vite`。
3. 設置名稱為 'react-bootstrap-practice'。
4. 選擇 'React' 模板。
5. 選擇 'TypeScript + SWC'。
6. 移動到新創建的專案目錄：`cd react-bootstrap-practice`。
7. 安裝並初始化專案：`yarn`。
8. 安裝 React-Bootstrap 和 Bootstrap：`yarn add react-bootstrap bootstrap`。
9. 在入口文件 (src/main.tsx) 中引入 Bootstrap 的 CSS 文件：`import 'bootstrap/dist/css/bootstrap.min.css';`。
10. 創建一個資料夾 'components' 在 `src` 目錄下，並在其中創建三個組件：`NavigationBar.tsx`、`CardList.tsx`、`ModalDialogSample.tsx`。
11. 在 `NavigationBar.tsx` 中實現導航欄的組件。
12. 在 `CardList.tsx` 中實現卡片列表的組件。
13. 在 `ModalDialog.tsx` 中實現模態框的組件。
14. 在 `App.tsx` 中引入這三個組件，並使用它們來構建頁面。
15. 用 `yarn dev` 啟動開發伺服器，並在瀏覽器中查看結果。

### 提示

- 可以參考 React-Bootstrap 官方文檔：[https://react-bootstrap.github.io/](https://react-bootstrap.github.io/)

### 參考組件
<details>
<summary>點擊查看參考組件</summary>

```tsx
// NavigationBar.tsx
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
```

```tsx
// CardList.tsx
import { Container, Card } from "react-bootstrap";

export const CardList = () => {
  return (
    <Container className="d-flex p-5 align-items-center justify-content-center">
      {[
        'Primary',
        'Secondary',
        'Success',
        'Danger',
        'Warning',
        'Info',
        'Light',
        'Dark',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="m-2"
        >
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>{variant} Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}
```

```tsx
// ModalDialogSample.tsx
import { Button, Container, Modal } from "react-bootstrap";
import { useState } from "react";

export const ModalDialogSample = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Container className="d-flex p-5 align-items-center justify-content-center">
        <Button variant="primary" className="w-100" onClick={() => setShow(true)}>
          Show Modal
        </Button>
      </Container>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
```

```tsx
// App.tsx
import NavigationBar from "./components/NavigationBar.tsx";
import { CardList } from "./components/CardList.tsx";
import { ModalDialogSample } from "./components/ModalDialogSample.tsx";

function App() {
  return (
    <div>
      <NavigationBar />
      <CardList />
      <ModalDialogSample />
    </div>
  )
}

export default App
```

```tsx
// main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

</details>
