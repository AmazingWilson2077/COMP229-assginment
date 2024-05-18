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

//
// const AppRoutes = () => (
//     <Routes>
//         <Route path="/about" element={<About/>}/>
//         <Route path="/contact" element={<Contact/>}/>
//         <Route path="/" element={<Home/>}/>
//     </Routes>
// );

function App() {
    return (

        <Router>
            <div>
                <MyNavbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/Services" element={<Services/>}/>
                    <Route path="/Projects" element={<Projects/>}/>
                </Routes>
            </div>
        </Router>
    );
}


export default App;
