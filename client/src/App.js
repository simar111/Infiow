import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Componenets/Navbar'; // Note: Corrected spelling from "Componenets" to "Components"
import Home from './Pages/Home';
import Footer from './Componenets/Footer';
import AboutUsPage from './Pages/About';
// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Portfolio from './pages/Portfolio';
// import Testimonials from './pages/Testimonials';
// import Contact from './pages/Contact';
// import Quote from './pages/Quote';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUsPage />} />
        {/* <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} /> */}
     
      </Routes>
         <Footer />
    </Router>
  );
}

export default App;