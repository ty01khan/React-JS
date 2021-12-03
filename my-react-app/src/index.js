import {React, useState} from 'react';
import ReactDOM from 'react-dom';
import Car3 from './Car.js';
import Cricket from './Cricket.js';

/**
 * ReactDOM.render(HTML Code, HTML ELement);
 * render function display the specified html code inside the specified html element
 */

import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

/**
 * ES6 Classes
 */
class Car {
    constructor(name) {
        this.brand = name;
    }

    firstMethod() {
        return 'I have a ' + this.brand + ' car';
    }
}

class Model extends Car {
    constructor(name, model) {
        super(name);
        this.model = model;
    }

    show() {
        return this.firstMethod() + ', it is a ' + this.model;
    }
}

const mycar = new Model("Ford", "Mustang");
ReactDOM.render(mycar.show(), document.getElementById('root'));

/**
 * ES6 Arrow functions
 */
 const hello = function() {
    return "Hello React!";
}
ReactDOM.render(hello(), document.getElementById('root'));

const hello1 = () => {
    return "Hello Talha Yaseen!";
}
ReactDOM.render(hello1(), document.getElementById('root'));

const hello2 = () => "Hello Talha!";
ReactDOM.render(hello2(), document.getElementById('root'));


/**
 * React ES6 Array
 */
const myArray = ['apple', 'banana', 'orange'];
const myList = myArray.map((item) => <p>{item}</p>)
ReactDOM.render(myList, document.getElementById('root'));


/**
 * ES6 Destructing
 */
const vehicle = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: '2021',
    color: 'red'
};

myVehicle(vehicle)

function myVehicle({type, color, brand, model}) {
    const message = 'This ' + type + ' is a ' + color + ' ' + brand + ' ' + model;
ReactDOM.render(message, document.getElementById('root'));
}

const vehicle1 = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021,
    color: 'red',
    registration: {
        city: 'Houston',
        state: 'Texas',
        country: 'USA'
    }
}

myVehicle1(vehicle1);
function myVehicle1({model, registration: {state, country}}) {
    const message = 'My ' + model + ' is registered in ' + state + ', ' + country;
    ReactDOM.render(message, document.getElementById('root'));
}


/**
 * Spreading operator
 */
const numbers1 = [1, 2, 3, 4];
const numbers2 = [7, 8, 9];
const numbers = [...numbers1, ...numbers2];
const [x, y, ...rest] = numbers;
document.write("<p>" + x + "</p>");
document.write("<p>" + y + "</p>");
document.write("<p>" + rest + "</p>")
document.write(numbers);
//ReactDOM.render(numbers, document.getElementById('root'));


/**
 * JSX (JavaScript XML) : Allows us to write HTML in react
 */
const element = <h2>I am Talha Yaseen. My experience in software field is of {3+2} months.</h2>;
ReactDOM.render(element, document.getElementById("root"));

// Without JSX
// const ele = React.createElement('h2', {}, 'I do not use JSX!');
// ReactDOM.render(ele, document.getElementById('root'));


const ele = (
    <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
    </ul>
);
ReactDOM.render(ele, document.getElementById('test'));

const ele1 = (
    <table>
        <tr>
            <th>Subject</th>
            <th>Full Marks</th>
            <th>Marks Obtained</th>
            <th>Percentage</th>
        </tr>
        <tr>
            <td>Mathematics</td>
            <td>100</td>
            <td>98</td>
            <td>98%</td>
        </tr>
        <tr>
            <td>English</td>
            <td>100</td>
            <td>88</td>
            <td>{88 * 100 / 100}%</td>
        </tr>
        <tr>
            <td>Hindi</td>
            <td>80</td>
            <td>65</td>
            <td>{65 * 100 / 80}%</td>
        </tr>
    </table>
);
ReactDOM.render(ele1, document.getElementById('test1'));

// Attribute class = className
const ele2 = <h3 className = "myClass">Hello Talha!</h3>
ReactDOM.render(ele2, document.getElementById("testclass"));

// if-else statement
const a = 6;
let text = "Hello, Testing...";
if(a < 10) {
    text = "Tested successfully.";
}
const ele3 = <h3>{text}</h3>;
ReactDOM.render(ele3, document.getElementById("ifelse"));

// to embed a JavaScript expression inside JSX, the JavaScript must be wrapped with curly braces, {}
// ternary statement
const b = 11;
const ele4 = <h3>{(b) < 10 ? "Testing failed" : "Hello, testing..."}</h3>
ReactDOM.render(ele4, document.getElementById("ternary"));



/**
 * Components : They are like functions that return HTML elements
 */

// Class component
// class Car0 extends React.Component {
//     render() {
//         return <h3>This is a class component example.</h3>
//     }
// }
// ReactDOM.render(<Car0 />, document.getElementById("classcomp"));

// Function component
function Car1() {
    return <h3>This is a function component example.</h3>
}
ReactDOM.render(<Car1 />, document.getElementById("funccomp"));

// Props : Also called properties (it is like function arguments, and it is being send to component as attributes)
function Car2(props) {
    return <h3>This is a {props.color} car.</h3>
}
ReactDOM.render(<Car2 color = 'red' />, document.getElementById("property"));

// Component inside component
function Garage() {
    const colour = "green";
    return (
        <>
            <h2>Whose car is this?</h2>
            <Car2 color={colour} />
        </>
    );
}
ReactDOM.render(<Garage />, document.getElementById("cic"));

// Components in files
ReactDOM.render(<Car3 />, document.getElementById('cif'));


/**
 * Props : It is like function argument in JavasSript and attribute in HTML
 */
function Garage1() {
    const cricInfo = {format: "Test Cricket", ballColor:"Pink"};
    return (
        <>
            <h3>Here's the match information...</h3>
            <Cricket type =  {cricInfo} />
        </>
    );
}
ReactDOM.render(<Garage1 />, document.getElementById('object'));


/**
 * Events : React has the same events as HTML: click, change, mouseover etc.
 */
function Football() {
    const shoot = () => {
        alert("Nice shot!");
    }

    return <button onClick = {shoot}> Take a shot!</button>
}
ReactDOM.render(<Football />, document.getElementById("events1"));

// Passing argument
function Kick() {
    const shoot = (a) => {
        alert(a);
    }

    return <button onClick = {() => shoot("Great Shot!")}>Take a new shot</button>
}
ReactDOM.render(<Kick />, document.getElementById("events2"));

// React event object
function Test() {
    const shoot = (a, b) => {
        alert(b.type);
    }

    return <button onClick = {(event) => shoot("Goal!", event)}>Take a shot</button>
}
ReactDOM.render(<Test />, document.getElementById('test1'));


/**
 * Conditionals
 */
function SuccessfulGoal() {
    return <h3>GOAL!</h3>;
}

function UnsuccessfulGoal() {
    return <h3>MISSED!</h3>;
}

function Goal(props) {
    const isGoal = props.isGoal;
    // if(isGoal) {
    //     return <SuccessfulGoal />;
    // }

    // return <UnsuccessfulGoal />;

    return <>{isGoal ? <SuccessfulGoal /> : <UnsuccessfulGoal />}</>;
}
ReactDOM.render(<Goal isGoal = {false} />, document.getElementById('goal'));

// Logical && operator
function Garage2(props) {
    const cars = props.cars;
    return (
        <>
            <h2>Garage</h2>
            { cars.length > 0 && <h3>This is a non-empty list of car.</h3> }
        </>
    );
}
const car = ["Ford", "Tata", "BMW"];
ReactDOM.render(<Garage2 cars = {car} />, document.getElementById('garage2'));


/**
 * React Lists
 */
function Car4(props) {
    return <li>I am a { props.brand }</li>
}

function Garage3() {
    const cars = ["Ford", "Tata", "BMW"];
    return (
        <>
            <h3>Who lives in my garage?</h3>
            <ul>
                {cars.map((car) => <Car4 brand={car} />)}
            </ul>
        </>
    );
}
ReactDOM.render(<Garage3 />, document.getElementById('garage3'));

// Keys
function Car5(props) {
    return <li>I am a { props.brand }</li>
}

function Garage4() {
    const cars = [
        {id: 1, brand: 'Ford'},
        {id: 2, brand: 'BMW'},
        {id: 3, brand: 'Audi'}
    ];

    return (
        <>
            <h4>Who lives in my garage?</h4>
            <ul>
                {cars.map((car) => <Car5 key = {car.id} brand={car.brand} />)}
            </ul>
        </>
    );
}
ReactDOM.render(<Garage4 />, document.getElementById('garage4'));


/**
 * React Forms
 */
function Form() {
    return (
        <form>
            <label>Enter your name: 
                <input type = "text" placeholder = "Talha Yaseen"/>
            </label>
        </form>
    );
}
ReactDOM.render(<Form />, document.getElementById('form1'));

// Handling forms
function MyForm() {
    const [name, setName] = useState("");

    return (
        <form>
            <label> Enter your name: 
                <input
                    type = "text"
                    value = {name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
        </form>
    )
}
ReactDOM.render(<MyForm />, document.getElementById('form2'));

// onSubmit button
function MyForm1() {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name: 
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <input type='submit' />
        </form>
    )
}
ReactDOM.render(<MyForm1 />, document.getElementById('form3'));

// Multiple Inputs
function MultiInputForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name: 
                <input
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" />
        </form>
    )
}
ReactDOM.render(<MultiInputForm />, document.getElementById('form4'));

// textarea
function TextareaForm() {
    const [textArea, setTextArea] = useState (
        "The content of a text area goes in the value attribute."
    );

    const handleChange = (event) => {
        setTextArea(event.target.value)
    }

    return (
        <form>
            <textarea value={textArea} onChange={handleChange}/>
        </form>
    )
}
ReactDOM.render(<TextareaForm/>, document.getElementById('form5'));

//Select
function MyDropdown() {
    const [myCar, setMyCar] = useState("Volvo");

    const handleChange = (event) => {
        setMyCar(event.target.value)
    }

    return (
        <form>
            <select value={myCar} onChange={handleChange}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
        </form>
    );
}
ReactDOM.render(<MyDropdown />, document.getElementById('form6'));