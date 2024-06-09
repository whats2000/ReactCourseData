import React, { useState, useEffect } from 'react';
import { ISSData } from "../types/ISSData";

export const DataFetcher: React.FC = () => {
  const [data, setData] = useState<ISSData | null>(null);

  useEffect(
    // 參數一：副作用函數引用
    () => {
      // 資料載入
      fetch('http://api.open-notify.org/iss-now.json')
        .then(response => response.json())
        .then((data: ISSData) => setData(data));
    },
    // 參數二：依賴陣列
    [] // 空依賴陣列表示只在組件掛載和卸載時執行一次
  );

  return (
    <div>
      <h1>國際太空站位置</h1>
      <p>緯度：{data && data.iss_position.latitude}</p>
      <p>經度：{data && data.iss_position.longitude}</p>
    </div>
  );
};
