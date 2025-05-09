import React from 'react';
import image from "../assets/ecoh.jpg";
import contactIcon from "../assets/jeux2.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <div className="bg-white overflow-hidden">

      {/* Section EcoGeste */}
      <div className="flex flex-col md:flex-row items-stretch justify-between py-12 gap-0">

        {/* Image sans marge gauche */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={image}
            alt="Eco Geste illustration"
            className="w-full h-full object-cover md:rounded-r-3xl"
          />
        </motion.div>

        {/* Texte à droite */}
        <motion.div
          className="w-full md:w-1/2 px-6 md:px-12 flex flex-col justify-center py-6 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-green-700">EcoGeste</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            EcoGeste est une initiative éducative et écologique née de la volonté d’impliquer les jeunes dans la protection de l’environnement.
            Grâce à des défis, des jeux interactifs et des ressources pédagogiques, nous encourageons chacun à adopter des gestes simples mais puissants pour préserver notre planète.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-2">Ce que nous offrons</h3>
              <ul className="list-disc list-inside text-gray-700 text-base leading-relaxed">
                <li>Jeux éducatifs et défis écologiques</li>
                <li>Ateliers pour les jeunes</li>
                <li>Ressources pédagogiques interactives</li>
                <li>Activités communautaires pour la planète</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-2">Pourquoi rejoindre notre communauté ?</h3>
              <ul className="list-disc list-inside text-gray-700 text-base leading-relaxed">
                <li>Devenir acteur du changement</li>
                <li>Acquérir des compétences environnementales</li>
                <li>Participer à un réseau engagé</li>
                <li>Agir concrètement pour la planète</li>
              </ul>
            </div>
          </div>

          <div>
            <Link
              to="/propos"
              className="bg-green-500 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-lg hover:bg-green-600 transition"
            >
              En savoir plus
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Section Contact - Des Questions */}
      <motion.div
        className="bg-green-100 py-12 px-6 mb-12 rounded-3xl shadow-md flex flex-col md:flex-row items-center justify-between gap-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="md:w-2/3 text-center md:text-left">
          <h3 className="text-4xl font-extrabold text-green-800 mb-4">
            Des questions ?
          </h3>
          <p className="text-xl text-gray-800">
            Contactez-nous au <span className="text-green-700 font-bold">53545993</span> pour plus d’informations ou pour collaborer avec nous.
          </p>
        </div>

        <div className="md:w-1/3 flex justify-center">
          <img
            src={contactIcon}
            alt="Contact"
            className="w-32 h-32 object-cover rounded-full shadow-lg"
          />
        </div>
      </motion.div>

    </div>
  );
};

export default Section2;
