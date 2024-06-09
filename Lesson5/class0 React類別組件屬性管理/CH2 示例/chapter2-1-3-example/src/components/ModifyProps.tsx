import { Component } from "react";

interface IProps {
  user: {
    name: string;
    age: number;
  };
  arr: number[];
}

class ModifyProps extends Component<IProps> {
  render() {
    this.props.user.name = "Tom"; // 不會拋出錯誤
    // this.props.user = { name: "Tom", age: 30 }; // 會拋出錯誤

    this.props.arr.push(6); // 不會拋出錯誤
    this.props.arr[0] = 7; // 不會拋出錯誤
    // this.props.arr = [7, 8, 9]; // 會拋出錯誤

    return (
      <>
        <h1>ModifyProps</h1>
        <p>User Name: {this.props.user.name}</p>
        <p>User Age: {this.props.user.age}</p>
        <p>Array: {this.props.arr.join(", ")}</p>
      </>
    );
  }
}

export default ModifyProps;
