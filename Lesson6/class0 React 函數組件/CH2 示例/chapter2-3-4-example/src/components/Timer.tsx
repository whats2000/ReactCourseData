import React, { useRef, useEffect } from 'react';

const Timer: React.FC = () => {
  const timerRef = useRef<number | null>(null);
  console.log('Timer got rendered');

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
