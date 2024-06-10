import React from 'react';
import { AuthProvider } from './context/AuthContext';
import LoginButton from './components/LoginButton';
import UserProfile from './components/UserProfile';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <UserProfile />
      <LoginButton />
    </AuthProvider>
  );
};

export default App;
