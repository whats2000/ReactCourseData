import { Component } from 'react'

import ClickButtonsGroup from './components/ClickButtonsGroup'

interface IAppStates {
  count: number;
}

class App extends Component<{}, IAppStates> {
  state = {
    count: 0
  };

  incrementNumber = (num: number) => {
    this.setState(prevState => ({ count: prevState.count + num }));
  };

  render() {
    return (
      <>
        <h1>Count: {this.state.count}</h1>
        <ClickButtonsGroup incrementNumber={this.incrementNumber} />
      </>
    );
  }
}

export default App
