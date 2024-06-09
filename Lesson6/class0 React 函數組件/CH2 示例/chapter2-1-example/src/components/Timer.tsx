import React, { useState, useEffect } from 'react';

export const Timer: React.FC = () => {
  const [time, setTime] = useState(0);

  useEffect(
    // 參數一：副作用函數引用
    () => {
      // 這邊定義了一個掛載後執行的定時器
      const timer = setInterval(() => {
        setTime(time => time + 1);
      }, 1000);

      // 清理函數
      return () => {
        clearInterval(timer);
      };
    },
    // 參數二：依賴陣列
    [] // 空依賴陣列表示只在組件掛載和卸載時執行一次
  );

  return <div>Time: {time}</div>;
};
