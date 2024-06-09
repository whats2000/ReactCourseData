import { Component } from "react";

interface IClickButtonsGroupProps {
  incrementNumber: (num: number) => void;
}

class ClickButtonsGroup extends Component<IClickButtonsGroupProps> {
  render() {
    return (
      <div>
        <button onClick={() => this.props.incrementNumber(1)}>Increment by 1</button>
        <button onClick={() => this.props.incrementNumber(5)}>Increment by 5</button>
        <button onClick={() => this.props.incrementNumber(10)}>Increment by 10</button>
      </div>
    );
  }
}

export default ClickButtonsGroup;
