import { Component } from 'react'
import WrongExample1 from "./components/WrongExample1.tsx";
import WrongExample2 from "./components/WrongExample2.tsx";
import WrongExample3 from "./components/WrongExample3.tsx";
import WrongExample4 from "./components/WrongExample4.tsx";
import WhatAboutFunctionSetState from "./components/WhatAboutFunctionSetState.tsx";

class App extends Component {
  render() {
    return (
      <>
        <WrongExample1 />
        <WrongExample2 />
        <WrongExample3 />
        <WrongExample4 />
        <WhatAboutFunctionSetState />
      </>
    );
  }
}

export default App
