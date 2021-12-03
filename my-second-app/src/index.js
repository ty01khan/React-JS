import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router.js';
import Todos from "./Todos";
import './test.css';
import styles from './my-style.module.css';
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

function App1() {
  const [count, setCount] = useState(0);
  const todos = ["todo 1", "todo 2"];

  const increment = () => {
    setCount((c) => c+1);
  };

  const decrement = () => {
    setCount((c) => c-1);
  };

  return (
    <>
      <Todos todos={todos}/>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </>
  );
}
ReactDOM.render(<App1 />, document.getElementById("test1"));

/**
 * CSS Styling
 */

// Inline styling
const Header = () => {
  return (
    <>
      <h1 style={{color: "red", backgroundColor: "lightgray"}}>Hello Style</h1>
      <p>Add a little style!</p>
    </>
  );
}
ReactDOM.render(<Header/>, document.getElementById("test2"));

// CSS Module
const Car = () => {
  return <h3 className={styles.bigblue}>Hello Car!</h3>
}
ReactDOM.render(<Car/>, document.getElementById('test3'));