~~# 第二章：Styled Components

## 2.1 Styled Components 介紹

### 2.1.1 什麼是 Styled Components

Styled Components 是一個用於在 React 應用中使用 CSS-in-JS 的庫。它允許你將樣式直接寫在 JavaScript 中，並將其與組件緊密結合。

### 2.1.2 Styled Components 的優勢

- CSS-in-JS：將樣式與組件邏輯緊密結合，使得樣式更加模組化和可重用。
- 動態樣式：可以根據 props 和狀態動態改變樣式。
- 無命名衝突：使用自動生成的唯一類名，避免了全局命名空間的污染。
- 方便的條件樣式：支持根據條件動態設置樣式，簡化了複雜樣式邏輯。

### 安裝 Styled Components

首先，通過 npm 或 Yarn 安裝 Styled Components：

```bash
# 使用 npm 安裝
npm install styled-components

# 使用 Yarn 安裝
yarn add styled-components
```

註: 視你的專案環境而定，我們使用 yarn 作為套件管理工具，所以我們使用 yarn 來安裝套件。

### 使用 Styled Components

在 React 組件中使用 Styled Components，你可以通過 `styled` 函數創建樣式化的組件：

```tsx
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
`;

const App: React.FC = () => {
  return <StyledButton>Styled Button</StyledButton>;
};

export default App;
```

在這個例子中，我們創建了一個 `StyledButton` 組件，並為其添加了樣式。這些樣式將與組件緊密結合，使得樣式更具模組化。

## 2.2 動態樣式與條件樣式

### 2.2.1 使用 props 動態設置樣式

Styled Components 允許你根據 props 動態設置樣式，為了與其他 props 區分，建議在 props 前加上 `$` 符號：

```tsx
import styled from 'styled-components';

interface ButtonProps {
  $primary?: boolean;
}

const Button = styled.button<ButtonProps>`
  background-color: ${props => props.$primary ? 'blue' : 'gray'};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
`;

const App: React.FC = () => {
  return (
    <div>
      <Button $primary>Primary Button</Button>
      <Button>Secondary Button</Button>
    </div>
  );
};

export default App;
```

在這個例子中，我們根據 `$primary` prop 動態設置按鈕的背景顏色。如果 `$primary` 為 `true`，按鈕的背景顏色為藍色，否則為灰色。

### 2.2.2 使用條件樣式

除了根據 props 動態設置樣式外，Styled Components 還支持更複雜的條件樣式：

```tsx
import styled, { css } from 'styled-components';

interface CardProps {
  $variant: 'primary' | 'secondary';
}

const Card = styled.div<CardProps>`
  background-color: ${props => props.$variant === 'primary' ? 'blue' : 'gray'};
  color: white;
  padding: 20px;
  border-radius: 10px;

  ${(props) =>
  props.$variant === 'primary' &&
  css`
      border: 2px solid white;
    `};
`;

const App: React.FC = () => {
  return (
    <div>
      <Card $variant="primary">Primary Card</Card>
      <Card $variant="secondary">Secondary Card</Card>
    </div>
  );
};

export default App;
```

在這個例子中，我們根據 `$variant` prop 設置卡片的背景顏色。如果 `$variant` 為 `primary`，卡片的背景顏色為藍色，並增加白色邊框。

## 2.3 常用條件樣式

### 2.3.1 動態樣式

可以根據不同的條件動態設置樣式：

```tsx
import styled from 'styled-components';

interface TitleProps {
  $size?: 'small' | 'medium' | 'large';
}

const Title = styled.h1<TitleProps>`
  font-size: ${props => {
  switch (props.$size) {
    case 'small':
      return '1rem';
    case 'medium':
      return '2rem';
    case 'large':
      return '3rem';
    default:
      return '2rem';
  }
}};
`;

const App: React.FC = () => {
  return (
    <div>
      <Title $size="small">Small Title</Title>
      <Title $size="medium">Medium Title</Title>
      <Title $size="large">Large Title</Title>
    </div>
  );
};

export default App;
```

在這個例子中，我們根據 `$size` prop 動態設置標題的字體大小。

### 2.3.2 嵌套樣式

Styled Components 支持嵌套樣式，使你可以更靈活地設置子元素的樣式：

```tsx
const Card = styled.div`
  background-color: white;
  border: 1px solid gray;
  padding: 20px;
  border-radius: 10px;

  & h2 {
    color: blue;
  }

  & p {
    color: gray;
  }
`;

const App: React.FC = () => {
  return (
    <Card>
      <h2>Card Title</h2>
      <p>Card content goes here.</p>
    </Card>
  );
};

export default App;
```

在這個例子中，我們使用嵌套樣式設置了 `h2` 和 `p` 元素的顏色。

## 2.4 與 Bootstrap 結合使用

Styled Components 可以與 Bootstrap 一同使用，讓你能夠在一個組件中同時使用這兩種樣式系統。你可以創建一個基於 Bootstrap
樣式的自訂樣式組件。當然也可以繼承自其他的組件。

繼承方法是使用 `styled` 函數傳入要繼承的組件作為參數，然後再定義自己的樣式。

### 2.4.1 基於 Bootstrap 的自訂樣式

```tsx
import styled from 'styled-components';
import { Card as BootstrapCard } from 'react-bootstrap';

const StyledBootstrapCard = styled(BootstrapCard)`
  background-color: lightblue;
  color: white;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid white;

  & h2 {
    font-size: 2rem;
    text-decoration: underline;
  }

  & p {
    font-size: 1rem;
  }
`;

const App: React.FC = () => {
  return (
    <div>
      <StyledBootstrapCard>
        <BootstrapCard.Body>
          <BootstrapCard.Title>Bootstrap Card</BootstrapCard.Title>
          <BootstrapCard.Text>This is a Bootstrap card.</BootstrapCard.Text>
        </BootstrapCard.Body>
      </StyledBootstrapCard>
    </div>
  );
};

export default App;
```

在這個例子中，我們基於 Bootstrap 的 `Card` 組件創建了一個自訂樣式的 `StyledBootstrapCard`
組件。我們設置了卡片的背景顏色、文字顏色、邊框、標題和內容的樣式。

## 2.5 練習題

創建一個使用 Styled Components 的頁面，包含以下功能：

1. 使用動態樣式創建一個 `StyledButton` 組件，基於 Bootstrap 的按鈕組件，根據 `$primary` prop 設置不同的背景顏色。
2. 使用條件樣式創建一個 `StyledCard` 組件，根據 `$variant` prop 設置不同的背景顏色和文字顏色。
3. 創建一個包含多個 `StyledCard` 組件的頁面，並使用嵌套樣式設置 `StyledCard` 組件內部元素的樣式。

### 提示步驟

1. 移動到你的 React 專案目錄 ('/CH2 練習題')。
2. 創建一個新的 vite 專案：`yarn create vite`。
3. 設置名稱為 'styled-components-practice'。
4. 選擇 'React' 模板。
5. 選擇 'TypeScript + SWC'。
6. 移動到新創建的專案目錄：`cd styled-components-practice`。
7. 安裝並初始化專案：`yarn`。
8. 安裝 Styled Components 和 React-Bootstrap：`yarn add styled-components react-bootstrap bootstrap`。
9. 在入口文件 (src/main.tsx) 中引入 Bootstrap 的 CSS 文件：`import 'bootstrap/dist/css/bootstrap.min.css';`。
10. 創建一個資料夾 'components' 在 `src` 目錄下，並在其中創建三個組件：`StyledButton.tsx`、`StyledCard.tsx`、`App.tsx`。
11. 在 `StyledButton.tsx` 中實現按鈕組件。
12. 在 `StyledCard.tsx` 中實現卡片組件。
13. 在 `App.tsx` 中引入這兩個組件，並使用它們來構建頁面。
14. 用 `yarn dev` 啟動開發伺服器，並在瀏覽器中查看結果。
