import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Accueil from './Composant/Accueil';
import Navbar from "./Composant/Navbar";
import Footer from './Composant/Footer';
import Propos from './Composant/Propos';
import Jeu from './Composant/Jeu';
import Defis from './Composant/Defis';
import Contact from './Composant/Contact';
import Video from './Composant/Video';
import Inscription from './Composant/Inscription';  

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="/jeu" element={<Jeu />} />
        <Route path="/defis" element={<Defis />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/video" element={<Video />} />
        <Route path="/inscription" element={<Inscription />} /> 
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
