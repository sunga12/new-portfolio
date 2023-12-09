import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Works from './components/Works';

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <Works />
      <About />
      <Contact />
    </div>
  );
}

export default App;
