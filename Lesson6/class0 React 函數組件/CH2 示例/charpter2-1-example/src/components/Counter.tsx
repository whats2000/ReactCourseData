import React, { useState, useEffect } from 'react';

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(
    // 參數一：副作用函數引用
    () => {
      console.log(`Count has changed to ${count}`);
    },
    // 參數二：依賴陣列
    [count] // 依賴 count，當 count 變化時重新執行
  );

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
