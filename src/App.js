
import './App.css';
import Navbar from './components/Navbar';
import Particles from './components/Particles';
import 'font-awesome/css/font-awesome.min.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Gallery from './components/Gallery';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        
      </header>
      <Navbar />
      <Particles id="tsparticles" />
      <Home/>
      <Contact/>
      <Gallery/>
      
    </div>
    
  );
}

export default App;
