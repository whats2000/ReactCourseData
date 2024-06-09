import { Component } from 'react'

import Card from "./components/Card.tsx";
import react from './assets/react.svg';

class App extends Component {
  render() {
    return (
      <>
        <Card>
          <h1>Card 1</h1>
          <img src={react} alt="react" />
        </Card>
        <Card>
          <h1>Card 2</h1>
          <img src={react} alt="react" />
        </Card>
      </>
    );
  }
}

export default App;
