import React from 'react';

import Counter1 from "./components/Counter1.tsx";
import Counter2 from "./components/Counter2.tsx";
import Counter3 from "./components/Counter3.tsx";
import Counter4 from "./components/Counter4.tsx";
import Counter5 from "./components/Counter5.tsx";

class App extends React.Component {
  render() {
    return (
      <>
        <Counter1 />
        <Counter2 />
        <Counter3 />
        <Counter4 />
        <Counter5 />
      </>
    );
  }
}

export default App
