import { Component } from "react";

interface IProps {
  name: string;
}

class ReadOnlyProps extends Component<IProps> {
  render() {
    // this.props.name = "Tom";

    return (
      <h1>
        {this.props.name}
      </h1>
    );
  }
}

export default ReadOnlyProps;
