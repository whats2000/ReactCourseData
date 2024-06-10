import { Component } from 'react'
import ReadOnlyProps from "./components/ReadOnlyProps.tsx";

interface IAppStates {
  count: number;
}

class App extends Component<{}, IAppStates> {
  render() {
    return (
      <>
        <ReadOnlyProps name={"John"} />
      </>
    );
  }
}

export default App
