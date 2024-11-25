import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Particles from './components/Particles';
import Home from './components/Home';
import Gallery from './components/Gallery/Gallery';
import Events from './components/events/Event';
import Resources from './components/Resources/Resource';
import Blog from './components/Blog/Blog';
import Contact from './components/contact/Contact';
import Opportunities from './components/Opportunities/Opportunities';
import LoginPage from './components/Login/Login';
import SignUpPage from './components/SignUp/Signup';
import Profile from './components/Profile/profile';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header"></header>
        <Navbar />
        <Particles id="tsparticles" />

      
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/gallery" element={<Gallery />} /> 
          <Route path="/events" element={<Events />} />
          <Route path="/resources" element={<Resources />} /> 
          <Route path="/blog" element={<Blog />} /> 
          <Route path="/contact" element={<Contact/>} /> 
          <Route path="/opportunities" element={<Opportunities/>} /> 
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignUpPage/>} />  
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <ToastContainer />
      </div> 
    </Router>
  );
}

export default App;
