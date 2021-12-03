import React from 'react';
import ReactDOM from 'react-dom';


/**
 * ReactDOM.render(HTML Code, HTML ELement);
 * render function display the specified html code inside the specified html element
 */

// import './index.css';
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
// class Car {
//     constructor(name) {
//         this.brand = name;
//     }

//     firstMethod() {
//         return 'I have a ' + this.brand + ' car';
//     }
// }

// class Model extends Car {
//     constructor(name, model) {
//         super(name);
//         this.model = model;
//     }

//     show() {
//         return this.firstMethod() + ', it is a ' + this.model;
//     }
// }

// const mycar = new Model("Ford", "Mustang");
// ReactDOM.render(mycar.show(), document.getElementById('root'));

/**
 * ES6 Arrow functions
 */
//  const hello = function() {
//     return "Hello React!";
// }

// const hello = () => {
//     return "Hello Talha Yaseen!";
// }

//const hello = () => "Hello Talha!";
//ReactDOM.render(hello(), document.getElementById('root'));


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
const element = <h2>I am Talha Yaseen. My experience in software field is of {1+1} years.</h2>;
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