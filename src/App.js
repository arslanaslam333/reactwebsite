import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import ErrorPage from './Components/ErrorPage';
import About from './Components/About';
import Services from './Components/Services';
import Footer from './Components/Footer';
import Cursor from './Components/Cursor'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Cursor/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
