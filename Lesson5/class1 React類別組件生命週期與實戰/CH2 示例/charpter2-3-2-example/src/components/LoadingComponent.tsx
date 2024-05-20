import React from 'react';

import { Data } from "../types/Data";

interface ILoadingState {
  data: Data;
  loading: boolean;
}

class LoadingComponent extends React.Component<{}, ILoadingState> {
  state = {
    data: {latest: '', history: {}},
    loading: true
  };

  componentDidMount() {
    fetch('https://whats2000.github.io/NSYSUCourseAPI/1122/version.json')
      .then(response => response.json())
      .then(response => {
        setTimeout(() => {
          // 模擬資料讀取時間
          this.setState({data: response, loading: false});
        }, 2000);
      })
      .catch(() => this.setState({loading: false}));
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    const { latest, history }: Data = this.state.data;

    return (
      <div>
        <h1>最新版本：{latest}</h1>
        <h2>歷史版本：</h2>
        {Object.keys(history).map((key) => (
          <div key={key}>
            {history[key]}
          </div>
        ))}
      </div>
    );
  }
}

export default LoadingComponent;
