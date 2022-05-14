
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Features from './Components/Features';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Offer from './Components/Offer';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Header/>
    <Features/>
    <Offer/>
    <About/>
    <Contact/>

    </div>
  );
}

export default App;
