import './App.css';
import Footer from './components/Footer';
import { Navbar } from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import  Project from './pages/Project';
import Contact from './pages/Contact';
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <>
    <Navbar />
    <Routes >
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/project" element={<Project />} />
      <Route path ="/contact" element={<Contact />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
