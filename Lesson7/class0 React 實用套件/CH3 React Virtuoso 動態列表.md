# 第三章：React Virtuoso

## 3.1 React Virtuoso 介紹

### 3.1.1 什麼是 React Virtuoso

React Virtuoso 是一個高效的虛擬滾動組件庫，用於在 React 應用中處理大量列表項目。它提供了優化的滾動性能，確保即使在數千個項目中也能保持流暢的用戶體驗。

### 3.1.2 React Virtuoso 的優勢

- 性能優化：虛擬滾動技術確保只渲染當前可見的列表項目，提升性能。
- 簡單易用：提供簡單的 API，使得在 React 中實現虛擬滾動變得非常容易。
- 高度可定制：支持自定義樣式和行為，滿足不同的需求。
- 無依賴性：僅依賴 React，自身無其他外部依賴。

### 安裝 React Virtuoso

首先，通過 npm 或 Yarn 安裝 React Virtuoso：

```bash
# 使用 npm 安裝
npm install react-virtuoso

# 使用 Yarn 安裝
yarn add react-virtuoso
```

註: 視你的專案環境而定，我們使用 yarn 作為套件管理工具，所以我們使用 yarn 來安裝套件。

### 使用 React Virtuoso

在 React 應用中使用 React Virtuoso，可以輕鬆地實現高效的虛擬滾動列表。

## 3.2 基本語法與使用

### 3.2.1 使用 Virtuoso 組件

React Virtuoso 提供了多種組件來實現虛擬滾動，包括 `Virtuoso`、`GroupedVirtuoso` 和 `TableVirtuoso` 等。

### 基本範例

以下是一個簡單的範例，展示了如何使用 React Virtuoso 組件來構建一個基本的虛擬滾動列表：

```tsx
import React from 'react';
import { Virtuoso } from 'react-virtuoso';

const items = Array.from({ length: 1000 }, (_, i) => `Item ${i}`);

const App: React.FC = () => {
  return (
    <Virtuoso
      style={{ height: '400px', width: '300px' }}
      totalCount={items.length}
      itemContent={(index) => <div>{items[index]}</div>}
    />
  );
};

export default App;
```

在這個範例中，我們創建了一個包含 1000 個項目的虛擬滾動列表。`Virtuoso` 組件確保只渲染當前可見的項目，提升性能。

## 3.3 高度定制與動態數據

### 3.3.1 高度定制

React Virtuoso 支持高度定制，可以根據需求自定義列表項目的樣式和行為。

```tsx
import React from 'react';
import { Virtuoso } from 'react-virtuoso';
import styled from 'styled-components';

const Item = styled.div<{ $isEven: boolean }>`
  padding: 10px;
  background-color: ${(props) => (props.$isEven ? 'lightgray' : 'white')};
`;

const items = Array.from({ length: 1000 }, (_, i) => `Item ${i}`);

const App: React.FC = () => {
  return (
    <Virtuoso
      style={{ height: '400px', width: '300px' }}
      totalCount={items.length}
      itemContent={(index) => (
        <Item $isEven={index % 2 === 0}>{items[index]}</Item>
      )}
    />
  );
};

export default App;
```

在這個範例中，我們使用 Styled Components 自定義了列表項目的樣式，根據項目索引設置不同的背景顏色。

### 3.3.2 處理動態數據

React Virtuoso 也支持處理動態數據，可以隨時更新列表項目。

```tsx
import React, { useState, useEffect } from 'react';
import { Virtuoso } from 'react-virtuoso';

const App: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    // 模擬異步數據加載
    const loadData = async () => {
      const data = Array.from({ length: 1000 }, (_, i) => `Item ${i}`);
      setItems(data);
    };

    loadData();
  }, []);

  return (
    <Virtuoso
      style={{ height: '400px', width: '300px' }}
      totalCount={items.length}
      itemContent={(index) => <div>{items[index]}</div>}
    />
  );
};

export default App;
```

在這個範例中，我們使用 `useEffect` 模擬異步數據加載，並將數據設置為列表項目。

## 3.4 實戰應用：滾動載入更多數據

### 3.4.1 滾動載入更多數據的實現

React Virtuoso 提供了滾動事件處理，可以實現滾動載入更多數據的功能。

```tsx
import React, { useState } from 'react';
import { Virtuoso } from 'react-virtuoso';

const App: React.FC = () => {
  const [items, setItems] = useState<string[]>(Array.from({ length: 50 }, (_, i) => `Item ${i}`));

  const loadMoreItems = () => {
    const newItems = Array.from({ length: 50 }, (_, i) => `Item ${items.length + i}`);
    setItems((prevItems) => [...prevItems, ...newItems]);
  };

  return (
    <Virtuoso
      style={{ height: '400px', width: '300px' }}
      totalCount={items.length}
      itemContent={(index) => <div>{items[index]}</div>}
      endReached={loadMoreItems}
    />
  );
};

export default App;
```

在這個範例中，我們使用 `endReached` 屬性來處理滾動到底部事件，並載入更多數據。
