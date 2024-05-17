// App.js
import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from './Home';
import About from './About';
import Contact from './Contact';
import MyNavbar from "./components/Navbar.jsx";
import Services from "./Services.jsx";
import Projects from "./Projects.jsx";



const AppRoutes = () => (
    <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
    </Routes>
);

function App() {
    return (
        <Router>
            {/*<div>*/}
            {/*    <nav>*/}
            {/*        <ul>*/}
            {/*            <li>*/}
            {/*                <Link to="/">Home</Link>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                <Link to="/about">About</Link>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                <Link to="/contact">Contact</Link>*/}
            {/*            </li>*/}
            {/*        </ul>*/}
            {/*    </nav>*/}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/Projects" element={<Projects />} />
            </Routes>

            {/*</div>*/}
            <MyNavbar />
            {/*<AppRoutes />*/}
        </Router>
    );
}


export default App;
