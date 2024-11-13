import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Particles from './components/Particles';
import Home from './components/Home';
import Login from './components/login/login';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header"></header>
        
        <Navbar />
        <Particles id="tsparticles" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
