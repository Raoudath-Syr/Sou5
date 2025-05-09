import React from "react";
import { Link } from "react-router-dom";
import { MailOpen, PhoneCall, MapPin } from "lucide-react";

import logoAdeme from "../assets/logo5.jpg";
import logoMinistere from "../assets/logo6.jpeg";
import logoUnicef from "../assets/Unicef.jpg";

const Footer = () => {
  return (
    <footer className="bg-green-500 text-white py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
        {/* Colonne 1: Contact */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <div className="flex items-center gap-4 mb-2">
            <PhoneCall className="w-6 h-6" />
            <span className="text-lg">+229 94 53 00 93</span>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <MapPin className="w-6 h-6" />
            <span className="text-lg">Sèmè-Podji, Bénin</span>
          </div>
          <div className="flex items-center gap-4">
            <MailOpen className="w-6 h-6" />
            <span className="text-lg">ecogestesyr@contact.bj</span>
          </div>
        </div>

        {/* Colonne 2: Liens rapides */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4">Liens d'accès rapide</h3>
          <ul className="space-y-2 text-lg">
            <li><Link to="/" className="hover:underline">Accueil</Link></li>
            <li><Link to="/propos" className="hover:underline">À propos</Link></li>
            <li><Link to="/jeu" className="hover:underline">Jeu</Link></li>
            <li><Link to="/defis" className="hover:underline">Défis</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/video" className="hover:underline">Vidéo</Link></li>
          </ul>
        </div>

        {/* Colonne 3: Partenaires sur une seule ligne */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4">Nos partenaires</h3>
          <div className="flex gap-8 justify-center items-start">
            <div className="flex flex-col items-center">
              <img src={logoAdeme} alt="ADEME" className="w-20 h-20 object-contain mb-2 rounded-full" />
              <span className="text-sm text-center">ADEME</span>
            </div>
            <div className="flex flex-col items-center">
              <img src={logoMinistere} alt="Ministère de l'Environnement" className="w-20 h-20 object-contain mb-2 rounded-full" />
              <span className="text-sm text-center">Ministère de l’Environnement</span>
            </div>
            <div className="flex flex-col items-center">
              <img src={logoUnicef} alt="UNICEF" className="w-20 h-20 object-contain mb-2 rounded-full" />
              <span className="text-sm text-center">UNICEF</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm border-t border-white/30 pt-4">
        {new Date().getFullYear()} Eco Geste – Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
