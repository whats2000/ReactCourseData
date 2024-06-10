import { Component } from "react";

interface IUserProfileProps {
  name: string;
  age: number;
  location: string;
}

class UserProfile extends Component<IUserProfileProps> {
  render() {
    return (
      <div style={{ border: "1px solid #000", padding: "10px" }}>
        <h1>{this.props.name}</h1>
        <h2>{this.props.age}</h2>
        <h3>{this.props.location}</h3>
      </div>
    );
  }
}

export default UserProfile;
