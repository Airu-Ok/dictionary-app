import React from 'react';
import './App.css';
import Nav from './components/Navbar/Nav';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import HowToStart from './components/Pages/HowToStart';
import Contact from './components/Pages/Contact';
import Register from './components/Pages/Register';
import Login from './components/Pages/Login';
import NotFound from './components/Pages/NotFound/NotFound';
function App(){
  return(
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/how-to-start' element={<HowToStart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </Router>
  );
}

export default App;