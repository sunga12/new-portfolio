import { useEffect } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Works from './components/Works';

function App() {
  useEffect(() => {
    // Set the title when the App component mounts
    document.title = 'Sunga Thawethe';

    // Optionally, reset the title when the App component unmounts
    return () => {
      document.title = 'React App';
    };
  }, []);
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
