import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'

/**
 * React Router
 */
export default function App1() {
    return (
        <Router>
            <div className="App">
            {/*className="App-header"*/}
            <header>
                <img src={logo} className="App-logo" alt="logo" />
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to="/blogs">Blog Articles</Link>
                </div>
                <div>
                    <Link to="/contact">Contact Me</Link>
                </div>
            </header>

            <hr />

            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route path="/blogs" element={<Blogs />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
            </div>
        </Router>
    );
}