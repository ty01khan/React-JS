import React, { useContext, createContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './hook.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/**
 * useState : this hook allows us to track state in a function component
 */

function App1() {
  const [state, setState] = useState({count: 10, theme: "blue"});
  const count = state.count;
  const theme = state.theme;

  function decrement() {
    setState(prevState => {
      if(prevState.count <= 16) {
        prevState.theme = "blue";
      }
      return { ...prevState, count: prevState.count-1 };
    });
  }

  function increment() {
    setState(prevState => {
      if(prevState.count > 14) {
        prevState.theme = "green";
      }
      return { ...prevState, count: prevState.count+1 };
    });
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={increment}>+</button>
    </>
  );
}
ReactDOM.render(<App1/>, document.getElementById('test1'));

function FavoriteColour() {
  const [color, setColor] = useState("");

  return (
    <>
      <h3>My favorite colour is {color}!</h3>
      <button type="button" onClick={() => setColor("blue")} style={{color: 'blue'}}>Blue</button>
      <button onClick={() => setColor("red")} style={{color: 'red'}}>Red</button>
      <button onClick={() => setColor("green")} style={{color: 'green'}}>Green</button>
      <button onClick={() => setColor("yellow")} style={{color: 'yellow'}}>Yellow</button>
    </>
  );
}
ReactDOM.render(<FavoriteColour />, document.getElementById("hook"));

function Car() {
  const [x, y] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    y(prevState => {
      return { ...prevState, color: "blue" };
    });
  }

  return (
    <>
      <h4>My {x.brand}</h4>
      <p>
        It is a {x.color} {x.model} from {x.year}
      </p>
      <button onClick={updateColor}>Blue</button>
    </>
  );
}
ReactDOM.render(<Car />, document.getElementById("hook1"));


/**
 * useEffect : this hook allows us to perform side effects in the components
 */

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000)
  }, []);

  return <h3>I've rendered {count} times!</h3>
}

ReactDOM.render(<Timer />, document.getElementById("effect"));

function Counter() {
  const [count, setCount] = useState(0);
  const [doubleCount, setDoubleCount] = useState(0);

  useEffect(() => {
    setDoubleCount(() => count * 2);
  }, [count]);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c+1)}>+</button>
      <p>2x Count: {doubleCount}</p>
    </>
  );
}
ReactDOM.render(<Counter />, document.getElementById("effect1"));


/**
 * useContext : it is a way to manage state globally
 */

function Component1() {
  const [user, setUser] = useState("Talha Yaseen");

  return (
    <>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </>
  );
}

function Component2({user}) {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={user} />
    </>
  );
}

function Component3({user}) {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 user={user} />
    </>
  );
}

function Component4({user}) {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 user={user} />
    </>
  );
}

function Component5({user}) {
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}
ReactDOM.render(<Component1 />, document.getElementById("context"));


const userContext = createContext();
function Component6() {
  const [user, setUser] = useState("Talha Yaseen Khan");

  return (
    <userContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component7 user={user} />
    </userContext.Provider>
  );
}

function Component7() {
  return (
    <>
      <h1>Component 7</h1>
      <Component8 />
    </>
  );
}

function Component8() {
  return(
    <>
      <h1>Component 8</h1>
      <Component9 />
    </>
  );
}

function Component9() {
  const user = useContext(userContext);

  return(
    <>
      <h1>Component 9</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}
ReactDOM.render(<Component6 />, document.getElementById('context1'));

