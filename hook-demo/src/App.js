import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(10);
  function decrement() {
    setCount(prevCount => prevCount-1);
  }

  function increment() {
    setCount(prevCount => prevCount+1);
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default App;
