import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { theme } = useTheme();

  return (
    <header style={{ background: theme === 'light' ? '#eee' : '#444', padding: '10px' }}>
      <h1 style={{ color: theme === 'light' ? '#000' : '#fff' }}>My App</h1>
    </header>
  );
};

export default Header;
