# 第二章：React 進階 Hooks 與狀態管理

## 2.3 使用 `useRef`

### 2.3.1 什麼是 `useRef`

`useRef` 是 React 提供的 Hook，用於在函數組件中創建一個可變的引用。這個引用在整個組件的生命週期中保持不變。`useRef`
的主要用途包括：

- 訪問 DOM 元素
- 保存任何可變值
- **不會導致組件重新渲染**

### 2.3.2 基本用法

`useRef` Hook 接受一個初始值並返回一個引用對象。這個對象有一個 `current` 屬性，初始值設置為傳入的參數。

```tsx
import React, { useRef } from 'react';

const FocusInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text"/>
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

export default FocusInput;
```

在這個例子中，我們使用 `useRef` 創建了一個 `inputRef` 引用，並將其賦予一個 `<input>`
元素。點擊按鈕時，我們調用 `inputRef.current.focus()` 將焦點設置到該輸入框。

### 2.3.3 使用場景與範例

訪問 DOM 元素
`useRef` 最常見的用途是訪問 DOM 元素，例如在需要直接操作 DOM 元素的時候。

示例：

```tsx
import React, { useRef } from 'react';

const ScrollToTop: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    if (divRef.current) {
      divRef.current.scrollTop = 0;
    }
  };

  return (
    <div>
      <div ref={divRef} style={{height: '100px', overflow: 'auto'}}>
        <p>Some content...</p>
        <p>More content...</p>
        <p>Even more content...</p>
      </div>
      <button onClick={scrollToTop}>Scroll to Top</button>
    </div>
  );
};

export default ScrollToTop;
```

### 2.3.4 保存可變值

`useRef` 也可以用於保存任何可變值，例如計時器 ID，這些值在組件重新渲染時不會改變。

示例：

```tsx
import React, { useRef, useEffect } from 'react';

const Timer: React.FC = () => {
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      console.log('Timer is running');
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return <div>Check the console for timer messages.</div>;
};

export default Timer;
```

### 2.3.5 創造動態動畫

`useRef` 也可以用於創建動態動畫，在動畫中，我們可以使用 `useRef` 來保存對動畫元素的引用，並使用 `requestAnimationFrame`
來更新動畫。

示例：

```tsx
import React, { useRef, useEffect } from 'react';

const ScrollToReveal: React.FC = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let start: number;
    const duration = 2000; // 2 seconds

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;

      if (boxRef.current) {
        boxRef.current.style.transform = `translateX(${Math.min(progress / 10, 200)}px)`;
      }

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return <div ref={boxRef} style={{width: '50px', height: '50px', background: 'blue'}}></div>;
};

export default ScrollToReveal;
```

在這個例子中，我們使用 `useRef` 創建了一個 `boxRef` 引用，並將其賦予一個 `<div>` 元素。使用 `requestAnimationFrame`
方法，我們可以在每次動畫更新時訪問和更新該元素的 `style` 屬性，從而實現動態動畫效果。

### 2.3.6 注意事項

引用的更新不會觸發重渲染：
- `useRef` 的主要特性之一是它的更新不會導致組件重新渲染。
- 因此，可以用來保存一些需要跨渲染週期保存的狀態。

`useRef` 與 `useState` 的區別：
- `useRef` 和 `useState` 之間的一個主要區別是 `useState` 的值改變會觸發重渲染，而 `useRef` 不會。

避免過度使用：
- 儘管 `useRef` 很強大，但應該避免過度使用它來管理狀態，因為這可能會導致難以理解的狀態管理邏輯。

### 2.3.7 練習題

創建一個函數組件 `ScrollToReveal`，該組件包含一個可以左右移動的方塊。點擊按鈕時，方塊從左側移動到右側。使用 `useRef`
來保存方塊元素的引用，並使用 `requestAnimationFrame` 來更新動畫。

## 2.4 進階狀態管理：`useReducer`

在 React 中，`useReducer` 是一個用於管理複雜狀態邏輯的 Hook。與 `useState` 相比，`useReducer` 更適合用於多變量的狀態更新場景，如處理多個相關狀態或需要根據特定邏輯更新狀態時。

### 2.4.1 `useReducer` 基本概念與用法

`useReducer` 是一個接收 reducer 函數和初始狀態的 Hook，並返回當前狀態和發送 action 的 dispatch 函數。reducer 函數負責根據 action 更新狀態。

#### 1. 基本用法

首先，我們先了解，`useReducer` 的基本用法：

- 定義狀態和 action 類型
- 定義 reducer 函數
- 使用 useReducer Hook 創建狀態和 dispatch 函數

其中 reducer 函數接收兩個參數：
- 當前狀態 `state`
- action 對象
- 返回新的狀態，需與初始狀態的類型相同

```tsx
import React, { useReducer } from 'react';

// 定義狀態和 action 類型
interface State {
  count: number;
}

interface Action {
  type: string;
}

// 初始狀態
const initialState: State = { count: 0 };

// 建立 reducer 函數，這可以是別的文件，名稱不一定要是 reducer，但參數和返回值要對應
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter: React.FC = () => {
  // 使用 useReducer Hook 建立狀態和 dispatch 函數
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

export default Counter;
```

在這個例子中，我們定義了一個 `reducer` 函數和一個初始狀態 `initialState`。`useReducer` Hook 返回當前狀態 `state` 和一個 `dispatch` 函數，我們可以用 `dispatch` 函數發送 `action` 來更新狀態。

### 2.4.2 使用 `useReducer` 處理複雜狀態邏輯

在某些情況下，狀態更新邏輯可能非常複雜，例如需要處理多個相關狀態或執行特定的狀態轉換。在這種情況下，`useReducer` 比 `useState` 更合適。

- 雖然都可以用來管理狀態，但 `useReducer` 更適合處理複雜的狀態邏輯。
- 因為可以將狀態更新邏輯集中在 reducer 函數中，使程式碼更加清晰和易於維護。

#### 1. 多變量狀態更新

```tsx
import React, { useReducer } from 'react';

interface State {
  count: number;
  text: string;
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: State = { count: 0, text: '' };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'setText':
      return { ...state, text: action.payload };
    default:
      return state;
  }
};

const ComplexCounter: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <input
        type="text"
        value={state.text}
        onChange={(e) => dispatch({ type: 'setText', payload: e.target.value })}
      />
      <p>Text: {state.text}</p>
    </div>
  );
};

export default ComplexCounter;
```

在這個例子中，我們使用 `useReducer` 管理多個狀態變量 `count` 和 `text`。`reducer` 函數根據不同的 `action` 更新對應的狀態變量。

### 2.4.3 與 `useState` 的比較

適用範圍：
- `useState` 適合簡單的狀態管理
- `useReducer` 更適合複雜的狀態邏輯。

狀態更新邏輯：
- `useState` 直接更新狀態
- `useReducer` 使用 reducer 函數集中管理狀態更新邏輯。
- 
程式碼可讀性：
- 對於複雜狀態，`useReducer` 可以使狀態更新邏輯更加集中和清晰。

### 2.4.4 練習題

假設你正在開發一個待辦事項應用程式，使用者可以新增、刪除和標記待辦事項為完成狀態。請使用 `useReducer` 管理應用程式的狀態。

#### 題目要求：

1. 創建一個 `TodoApp` 函數組件，該組件包含以下功能：
    - 新增待辦事項：使用者可以輸入待辦事項的描述並新增到列表中。
    - 刪除待辦事項：使用者可以刪除不需要的待辦事項。
    - 標記待辦事項為完成：使用者可以點擊待辦事項，將其標記為完成狀態或取消完成狀態。
2. 使用 `useReducer` 管理應用程式的狀態，包括待辦事項列表及其狀態（如是否完成）。
3. 每個待辦事項應該有一個唯一的 ID、描述和完成狀態。

#### 提示：

- 定義一個初始狀態，包含待辦事項列表。
- 定義一個 reducer 函數，根據不同的 action 更新狀態（如新增、刪除、標記完成）。
- 使用 `useReducer` Hook 管理狀態和 dispatch action。
