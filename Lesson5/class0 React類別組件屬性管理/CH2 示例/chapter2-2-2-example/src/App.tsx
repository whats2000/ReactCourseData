import { Component } from 'react'
import BorderComponent from "./components/BorderComponent.tsx";
import WelcomeMessage from "./components/WelcomeMessage.tsx";

class App extends Component {
  render() {
    const renderComponent = <WelcomeMessage />;

    return (
      <>
        <BorderComponent renderComponent={<WelcomeMessage />} />
        <BorderComponent renderComponent={renderComponent} />
      </>
    );
  }
}

export default App;
