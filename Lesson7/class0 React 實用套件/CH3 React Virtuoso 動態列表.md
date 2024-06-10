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

const items = Array.from({length: 1000}, (_, i) => `Item ${i}`);

const App: React.FC = () => {
  return (
    <Virtuoso
      style={{height: '400px', width: '300px'}}
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

const items = Array.from({length: 1000}, (_, i) => `Item ${i}`);

const App: React.FC = () => {
  return (
    <Virtuoso
      style={{height: '400px', width: '300px'}}
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
      const data = Array.from({length: 1000}, (_, i) => `Item ${i}`);
      setItems(data);
    };

    loadData();
  }, []);

  return (
    <Virtuoso
      style={{height: '400px', width: '300px'}}
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
  const [items, setItems] = useState<string[]>(Array.from({length: 50}, (_, i) => `Item ${i}`));

  const loadMoreItems = () => {
    const newItems = Array.from({length: 50}, (_, i) => `Item ${items.length + i}`);
    setItems((prevItems) => [...prevItems, ...newItems]);
  };

  return (
    <Virtuoso
      style={{height: '400px', width: '300px'}}
      totalCount={items.length}
      itemContent={(index) => <div>{items[index]}</div>}
      endReached={loadMoreItems}
    />
  );
};

export default App;
```

在這個範例中，我們使用 `endReached` 屬性來處理滾動到底部事件，並載入更多數據。

### 3.5 練習題

創建一個動態的課程列表，包含以下功能：

1. 使用 Virtuoso 組件顯示課程列表。
2. 根據 API 數據設置課程列表項目的內容，包括課程名稱、授課教師和教室。
3. 根據課程索引設置不同的背景顏色，偶數項目為灰色，奇數項目為白色。
4. 在滾動到列表底部時自動載入更多課程數據。

### 提示步驟

1. 移動到你的 React 專案目錄 ('/CH3 練習題')。
2. 創建一個新的 vite 專案：`yarn create vite`。
3. 設置名稱為 'react-virtuoso-practice'。
4. 選擇 'React' 模板。
5. 選擇 'TypeScript + SWC'。
6. 移動到新創建的專案目錄：`cd react-virtuoso-practice`。
7. 安裝並初始化專案：`yarn`。
8. 安裝 React Virtuoso 和 axios：`yarn add react-virtuoso axios styled-components @types/styled-components`.
9. 創建一個資料夾 'components' 在 `src` 目錄下，並在其中創建組件：`CourseList.tsx`。
10. 在 `CourseList.tsx` 中實現課程列表組件。
11. 在 `App.tsx` 中引入課程列表組件。
12. 啟動開發服務器：`yarn dev`。

### 參考組件

<details>
<summary>點擊查看參考組件</summary>

```tsx
// CourseList.tsx
import React, { useState, useEffect } from 'react';
import { Virtuoso } from 'react-virtuoso';
import axios from 'axios';
import styled from 'styled-components';

const CourseItem = styled.div<{ $isEven: boolean }>`
  padding: 10px;
  background-color: ${(props) => (props.$isEven ? 'lightgray' : 'white')};
  border-bottom: 1px solid #ccc;
`;

const StyledVirtuoso = styled(Virtuoso)`
  height: 80vh !important;
  width: 100% !important;
`;

const CourseList: React.FC = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [year, setYear] = useState<string>('');
  const [latestUpdate, setLatestUpdate] = useState<string>('');
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchVersionData = async () => {
    try {
      const response = await axios.get('https://whats2000.github.io/NSYSUCourseAPI/version.json');
      setYear(response.data.latest);
    } catch (error) {
      setError('Error fetching version data.');
      console.error('Error fetching version data:', error);
    }
  };

  const fetchUpdatedData = async () => {
    try {
      const response = await axios.get(`https://whats2000.github.io/NSYSUCourseAPI/${year}/version.json`);
      setLatestUpdate(response.data.latest);
    } catch (error) {
      setError('Error fetching updated data.');
      console.error('Error fetching updated data:', error);
    }
  };

  const fetchTotalPages = async () => {
    if (!year || !latestUpdate) return;

    try {
      const response = await axios.get(`https://whats2000.github.io/NSYSUCourseAPI/${year}/${latestUpdate}/info.json`);
      setTotalPages(response.data.page_size);
    } catch (error) {
      setError('Error fetching total pages.');
      console.error('Error fetching total pages:', error);
    }
  };

  const loadCourses = async () => {
    if (!year || !latestUpdate || page > totalPages) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://whats2000.github.io/NSYSUCourseAPI/${year}/${latestUpdate}/page_${page}.json`);
      setCourses((prevCourses) => [...prevCourses, ...response.data]);
      setPage(page + 1);
    } catch (error) {
      setError('Error loading courses.');
      console.error('Error loading courses:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchVersionData().catch((error) => {
      console.error(error);
    });
  }, []);

  useEffect(() => {
    if (year) {
      fetchUpdatedData().catch((error) => {
        console.error(error);
      });
    }
  }, [year]);

  useEffect(() => {
    if (latestUpdate) {
      fetchTotalPages().catch((error) => {
        console.error(error);
      });
    }
  }, [latestUpdate]);

  useEffect(() => {
    if (totalPages > 0) {
      loadCourses().catch((error) => {
        console.error(error);
      });
    }
  }, [totalPages]);

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {isLoading && <p>Loading...</p>}
      <StyledVirtuoso
        totalCount={courses.length}
        itemContent={(index) => (
          <CourseItem $isEven={index % 2 === 0}>
            <h3>{courses[index].name}</h3>
            <p>{courses[index].teacher}</p>
            <p>{courses[index].room}</p>
          </CourseItem>
        )}
        endReached={loadCourses}
      />
    </div>
  );
};

export default CourseList;
```

### App.tsx

```tsx
import React from 'react';
import CourseList from './components/CourseList';

const App: React.FC = () => {
  return (
    <div>
      <h1>動態課程列表</h1>
      <CourseList/>
    </div>
  );
};

export default App;
```

### 提示

- 可以參考 React Virtuoso 官方文檔：[https://virtuoso.dev/](https://virtuoso.dev/)
- 使用 axios 獲取 API 數據：[https://axios-http.com/](https://axios-http.com/)

</details>
