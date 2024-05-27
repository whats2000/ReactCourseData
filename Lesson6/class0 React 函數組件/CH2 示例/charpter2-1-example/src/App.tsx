import React from "react";

import { DataFetcher } from "./components/DataFetcher.tsx";
import { Counter } from "./components/Counter.tsx";
import { Timer } from "./components/Timer.tsx";

const App: React.FC = () => {
  return (
    <>
      <DataFetcher />
      <Counter />
      <Timer />
    </>
  );
}

export default App
