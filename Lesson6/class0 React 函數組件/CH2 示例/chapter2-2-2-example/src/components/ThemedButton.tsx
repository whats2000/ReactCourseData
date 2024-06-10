import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemedButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff'
      }}>
      Toggle Theme
    </button>
  );
};

export default ThemedButton;
