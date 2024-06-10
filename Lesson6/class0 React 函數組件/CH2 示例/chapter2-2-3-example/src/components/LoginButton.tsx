import React from 'react';
import { useAuth } from '../context/AuthContext';

const LoginButton: React.FC = () => {
  const auth = useAuth();

  return auth.user ? (
    <button onClick={auth.logout}>Logout</button>
  ) : (
    <button onClick={() => auth.login('User')}>Login</button>
  );
};

export default LoginButton;
