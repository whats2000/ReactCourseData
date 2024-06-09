import React, { useState } from 'react';

const FormComponent: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('Not Set');

  const colorMap: { [key: string]: string } = {
    'Not Set': 'black',
    'Weak': 'red',
    'Medium': 'orange',
    'Strong': 'green',
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
      updatePasswordStrength(value);
    }
  };

  const updatePasswordStrength = (password: string) => {
    let strength = 'Not Set';
    if (password.length > 0) strength = 'Weak';
    if (password.length > 6) strength = 'Medium';
    if (password.length > 10) strength = 'Strong';
    setPasswordStrength(strength);
  };

  return (
    <form>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleInputChange}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleInputChange}
        placeholder="Password"
      />
      <p style={{ color: colorMap[passwordStrength] }}>
        Password Strength: {passwordStrength}
      </p>
    </form>
  );
};

export default FormComponent;
