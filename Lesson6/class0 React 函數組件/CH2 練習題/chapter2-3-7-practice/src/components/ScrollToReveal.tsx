import React, { useRef, useEffect } from 'react';

const ScrollToReveal: React.FC = () => {
  // 這邊你需要創建多個 ref 來存放每個 block 的 DOM (提示: 使用 useRef 而類型是 HTMLDivElement[])
  // Your code here
  const blockRefs = null; // 替換成正確的值
  // End of your code

  const handleScroll = () => {
    // 提示: 獲取所有的 block DOM (亦即取得 HTMLDivElement[])，可以透過 blockRefs._______ 來取得
    // Your code here
    const blocks = null; // 替換成正確的值
    // End of your code

    // 遍歷所有的 block DOM，如果 block 進入畫面，則將 block 的 opacity 設為 1，transform 設為 'translateY(0)'
    blocks?.forEach((block) => {
      if (block) {
        const rect = block.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          block.style.opacity = '1';
          block.style.transform = 'translateY(0)';
        }
      }
    });
  };

  // 當 component mount 時，監聽 scroll 事件
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // 當 component unmount 時，移除 scroll 事件
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 這邊你需要創建多個 block，每個 block 都有一個 ref 來存放自己的 DOM
  return (
    <div style={{ height: '1500px' }}>
      {Array.from({ length: 30 }).map((_, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) blockRefs.current[index] = el;
          }}
          style={{
            opacity: 0,
            transform: 'translateY(100px)',
            transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
            height: '100px',
            margin: '50px 0',
            background: 'lightblue',
          }}
        >
          Block {index + 1}
        </div>
      ))}
    </div>
  );
};

export default ScrollToReveal;
