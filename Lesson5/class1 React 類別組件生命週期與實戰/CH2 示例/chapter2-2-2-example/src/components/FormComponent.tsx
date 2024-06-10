import React from 'react';

interface IFormState {
  username: string;
  password: string;
  passwordStrength: string;
}

class FormComponent extends React.Component<{}, IFormState> {
  state = {
    username: '',
    password: '',
    passwordStrength: 'Not Set',
  };

  private colorMap: { [key: string]: string } = {
    'Not Set': 'black',
    'Weak': 'red',
    'Medium': 'orange',
    'Strong': 'green',
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<IFormState, keyof IFormState>, this.updatePasswordStrength);
  }

  updatePasswordStrength = () => {
    const { password } = this.state;
    let strength = 'Not Set';
    if (password.length > 0) strength = 'Weak';
    if (password.length > 6) strength = 'Medium';
    if (password.length > 10) strength = 'Strong';
    this.setState({ passwordStrength: strength });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
          placeholder="Password"
        />
        <p style={{ color: this.colorMap[this.state.passwordStrength] }}>
          Password Strength: {this.state.passwordStrength}
        </p>
      </form>
    );
  }
}

export default FormComponent;
