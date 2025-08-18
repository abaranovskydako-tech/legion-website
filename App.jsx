import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import Documents from './pages/Documents.jsx';
import Contacts from './pages/Contacts.jsx';
import Quiz from './pages/Quiz.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
