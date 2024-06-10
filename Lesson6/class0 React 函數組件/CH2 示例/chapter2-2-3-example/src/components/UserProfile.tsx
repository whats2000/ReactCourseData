import React from 'react';
import { useAuth } from '../context/AuthContext';

const UserProfile: React.FC = () => {
  const auth = useAuth();

  return <div>{auth.user ? `Hello, ${auth.user}` : 'You are not logged in.'}</div>;
};

export default UserProfile;
