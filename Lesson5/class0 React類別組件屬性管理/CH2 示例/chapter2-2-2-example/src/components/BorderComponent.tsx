import React, { Component } from "react";

interface IProps {
  renderComponent: React.ReactNode;
}

class BorderComponent extends Component<IProps> {
  render() {
    return (
      <div style={{ border: "1px solid #000" }}>
        {this.props.renderComponent}
      </div>
    );
  }
}

export default BorderComponent;
