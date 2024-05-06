import { Component } from "react";

interface IProps {
  user: {
    name: string;
    age: number;
  };
}

class UserInfoContainer extends Component<IProps> {
  constructor(props: IProps) {
    super(); // 試試移除 `props` 參數
    console.log(this.props?.user?.name); // undefined
  }

  render() {
    return (
      <div>
        <h1>{this.props.user.name}</h1>
        <h2>{this.props.user.age}</h2>
      </div>
    );
  }
}

export default UserInfoContainer;
