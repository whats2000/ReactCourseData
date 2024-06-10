import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemedButton from './components/ThemedButton';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Header />
      <div style={{ padding: '20px' }}>
        <ThemedButton />
      </div>
    </ThemeProvider>
  );
};

export default App;
