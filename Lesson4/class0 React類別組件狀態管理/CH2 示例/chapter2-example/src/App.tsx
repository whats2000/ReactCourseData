import { Component } from 'react'
import Question1 from "./components/Question1.tsx";
import Question2 from "./components/Question2.tsx";
import Question3 from "./components/Question3.tsx";

class App extends Component {
  render() {
    return (
      <>
        <Question1 />
        <Question2 />
        <Question3 />
      </>
    );
  }
}

export default App
