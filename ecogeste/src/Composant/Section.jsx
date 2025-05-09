import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bg1 from '../assets/ECO4.webp';
import bg2 from '../assets/ECO5.webp';
import bg3 from '../assets/nature-ecogestes-1200.jpg';

const backgrounds = [bg1, bg2, bg3];

const Section = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url(${backgrounds[current]})`, 
        backgroundAttachment: 'fixed' 
      }}
    >
      
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Bienvenue sur <span className="text-green-400">Eco Geste</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl max-w-3xl font-medium mb-6">
          Chaque action compte pour protéger notre planète. À travers des activités ludiques,
          éducatives et écologiques, Eco Geste sensibilise les jeunes et les communautés à adopter
          des gestes simples, mais puissants, en faveur de l’environnement.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/inscription"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition duration-300"
          >
            Inscrivez-vous
          </Link>
          <Link
            to="/jeu"
            className="bg-white text-green-700 hover:bg-gray-100 px-6 py-3 rounded-full font-medium transition duration-300"
          >
            Commencer à jouer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section;
