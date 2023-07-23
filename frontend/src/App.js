import React from "react";
import "./App.css";

import ButtonComponent from "./components/ButtonComponent";
import CounterComponent from "./components/CounterComponent";
import DataFetchingComponent from "./components/DataFetchingComponent";
import FetchData from "./components/FetchData";
function App() {
  return (
    <div>
      {/* Task 1: JSX and Component Creation */}
      <ButtonComponent label="Click Me" />
      <ButtonComponent label="Try Again" />

      {/* Task 2: State Management */}
      <CounterComponent />

      {/* Task 3: Fetching and Rendering Data */}
      <DataFetchingComponent />

      <FetchData />
    </div>
  );
}
export default App;
