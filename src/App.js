import Header from './components/Header';
import Hero from './components/Hero';
import Treatment from './components/Treatment';
import Staff from './components/Staff';
import About from './components/About';
import ContactUs from './components/ContactUs';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
        <Treatment />
        <Staff />
        <About />
        <ContactUs />
    </div>
  );
}

export default App;
