import { Component } from 'react'
import MyComponent from "./components/MyComponent.tsx";

class App extends Component {
  render() {
    return (
      <>
        <MyComponent />
        <MyComponent></MyComponent>
        <MyComponent />
      </>
    );
  }
}

export default App
