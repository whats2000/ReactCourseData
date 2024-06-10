import React from 'react';

import { Data } from "../types/Data";

interface IErrorState {
  data: Data[];
  error: string | null;
}

class ErrorHandlingComponent extends React.Component<{}, IErrorState> {
  state = {
    data: [],
    error: null
  };

  componentDidMount() {
    /**
     * 這是個無效的 API 位址，所以會觸發 `catch` 區塊，並將錯誤訊息設定到 `state` 中。
     */
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => this.setState({data}))
      .catch(error => this.setState({error: error.message}));
  }

  render() {
    if (this.state.error) {
      return <div>Error: {this.state.error}</div>;
    }
    return (
      <div>
        {this.state.data.length > 0 && this.state.data.map((item: Data) => (
          <div key={item.id}>{item.value}</div>
        ))}
      </div>
    );
  }
}

export default ErrorHandlingComponent;
