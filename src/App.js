import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Particles from './components/Particles';
import Home from './components/Home';
import Gallery from './components/Gallery/Gallery';
import Events from './components/events/Event';
import Resources from './components/Resources/Resource';
import Blog from './components/Blog/Blog';
import Contact from './components/contact/Contact';
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header"></header>
        <Navbar />
        <Particles id="tsparticles" />

        {/* Define routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page route */}
          <Route path="/gallery" element={<Gallery />} /> {/* Gallery page route */}
          <Route path="/events" element={<Events />} /> {/*  page route */}
          <Route path="/resources" element={<Resources />} /> {/*  page route */}
          <Route path="/blog" element={<Blog />} /> {/*  page route */}
          <Route path="/contact" element={<Contact/>} /> {/*  page route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
