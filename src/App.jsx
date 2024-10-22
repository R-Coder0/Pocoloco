import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Activities from './pages/Activities';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import BookNowButton from './components/BookNow';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <BookNowButton/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
