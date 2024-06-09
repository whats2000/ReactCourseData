import { Component } from 'react'

import Notifications from "./components/Notifications.tsx";

interface IAppStates {
  showNotification: boolean;
}

class App extends Component<{}, IAppStates> {
  state = {
    showNotification: false,
  }

  showNotification = () => {
    this.setState({ showNotification: true });
  }

  hideNotification = () => {
    this.setState({ showNotification: false });
  }

  render() {
    return (
      <>
        <button onClick={this.showNotification}>Show Notification</button>
        {this.state.showNotification && (
          <Notifications handleHideNotification={this.hideNotification} />
        )}
      </>
    );
  }
}

export default App
