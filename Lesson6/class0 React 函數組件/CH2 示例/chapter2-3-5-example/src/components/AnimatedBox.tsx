import React, { useRef, useEffect } from 'react';

const AnimatedBox: React.FC = () => {
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

export default AnimatedBox;
