import { Component } from 'react'
import UserInfoContainer from "./components/UserInfoContainer.tsx";

class App extends Component {
  render() {
    const user = {
      name: 'Alice',
      age: 18
    };

    return (
      <>
        <UserInfoContainer user={user} />
      </>
    );
  }
}

export default App;
