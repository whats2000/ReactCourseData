import { Component } from 'react'
import ModifyProps from "./components/ModifyProps.tsx";

class App extends Component {
  render() {
    const user = {
      name: "John",
      age: 20,
    }

    const arr = [1, 2, 3, 4, 5];

    return (
      <>
        <h1>App</h1>
        <p>Usr Name: {user.name}</p>
        <p>Usr Age: {user.age}</p>
        <p>Array: {arr.join(", ")}</p>
        <ModifyProps user={user} arr={arr} />
      </>
    );
  }
}

export default App;
