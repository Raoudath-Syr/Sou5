import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'bg-green-500 rounded-3xl p-1 font-bold'
      : 'hover:bg-green-500 rounded-3xl p-1';

  return (
    <nav className='fixed top-0 w-full bg-blue-900 text-white z-50 shadow-md'>
      <div className='flex justify-between items-center px-4 py-3 md:px-8'>

        {/* Logo */}
        <div className='text-2xl font-bold'>
          <h1>
            ECO<span className='text-green-500'>Geste</span>
          </h1>
        </div>

        {/* Menu icon (mobile) */}
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Liens (desktop) */}
        <div className='hidden md:flex space-x-4 items-center'>
          <NavLink to="/" className={navLinkClass}>Accueil</NavLink>
          <NavLink to="/propos" className={navLinkClass}>À propos</NavLink>
          <NavLink to="/jeu" className={navLinkClass}>Mini-jeu</NavLink>
          <NavLink to="/defis" className={navLinkClass}>Défis</NavLink>
          <NavLink to="/video" className={navLinkClass}>Vidéos</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          
          {/* Lien vers la page Inscription */}
          <NavLink
            to="/inscription"
            className={({ isActive }) =>
              isActive
                ? 'bg-green-500 text-white rounded-xl p-1 px-3 font-bold'
                : 'bg-green-500 text-white rounded-xl p-1 px-3 hover:bg-green-600'
            }
          >
            Inscription
          </NavLink>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      {menuOpen && (
        <div className='md:hidden flex flex-col px-4 pb-4 space-y-2 bg-blue-800'>
          <NavLink to="/" onClick={toggleMenu} className={navLinkClass}>Accueil</NavLink>
          <NavLink to="/propos" onClick={toggleMenu} className={navLinkClass}>À propos</NavLink>
          <NavLink to="/jeu" onClick={toggleMenu} className={navLinkClass}>Mini-jeu</NavLink>
          <NavLink to="/defis" onClick={toggleMenu} className={navLinkClass}>Défis</NavLink>
          <NavLink to="/video" onClick={toggleMenu} className={navLinkClass}>Vidéos</NavLink>
          <NavLink to="/contact" onClick={toggleMenu} className={navLinkClass}>Contact</NavLink>

          {/* Lien vers la page Inscription */}
          <NavLink
            to="/inscription"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive
                ? 'bg-green-500 text-white rounded-xl p-1 w-full font-bold'
                : 'bg-green-500 text-white rounded-xl p-1 w-full hover:bg-green-600'
            }
          >
            Inscription
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
