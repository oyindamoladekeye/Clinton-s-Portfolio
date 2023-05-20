import './App.css';
import Footer from './components/Footer';
import { Navbar } from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import  Project from './pages/Project';
import Contact from './pages/Contact';
import { Routes, Route , useLocation } from "react-router-dom"
import ScrollToTop from './components/ScrollToTop'
import NotFound from './pages/NotFound';


function App() {
  const location = useLocation();
  const excludedRoutes = ['/', '/about', '/project', '/contact'];
  return (
    <>
    {excludedRoutes.includes(location.pathname) && <Navbar />}
    <ScrollToTop />
    <Routes >
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/project" element={<Project />} />
      <Route path ="/contact" element={<Contact />} />
      <Route path='*' element={<NotFound />}/>
    </Routes>
    {excludedRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
