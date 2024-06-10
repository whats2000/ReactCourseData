import React, { useRef } from 'react';

const ScrollToTop: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    if (divRef.current) {
      divRef.current.scrollTop = 0;
    }
  };

  const scrollToBottom = () => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  }

  return (
    <div>
      <div ref={divRef} style={{
        height: '500px',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        margin: '100px',
        border: '1px solid black'
      }}>
        <p>Some content...</p>
        <p>Some content...</p>
        <p>Some content...</p>
        <p>Some content...</p>
        <p>Some content...</p>
        <p>Some content...</p>
        <p>Some content...</p>
        <p>Some content...</p>
        <p>Some content...</p>
        <p>Some content...</p>
        <p>More content...</p>
        <p>More content...</p>
        <p>More content...</p>
        <p>More content...</p>
        <p>More content...</p>
        <p>More content...</p>
        <p>More content...</p>
        <p>More content...</p>
        <p>More content...</p>
        <p>More content...</p>
        <p>More content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
        <p>Even more content...</p>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '100px',
        border: '1px solid black'
      }}>
        <button
          style={{padding: '10px', margin: '10px'}}
          onClick={scrollToTop}>Scroll to Top</button>
        <button
          style={{padding: '10px', margin: '10px'}}
          onClick={scrollToBottom}>Scroll to Bottom</button>
      </div>
    </div>
  );
};

export default ScrollToTop;
