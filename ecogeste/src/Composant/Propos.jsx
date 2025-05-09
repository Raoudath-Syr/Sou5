import React from 'react';
import { motion } from 'framer-motion';
import bgImage from '../assets/ECO4.webp';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const Card = ({ title, content, index }) => (
  <motion.div
    className="bg-white shadow-2xl rounded-2xl p-8 w-full"
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
  >
    <h3 className="text-2xl font-bold text-green-800 mb-4">{title}</h3>
    <div className="text-gray-700 leading-relaxed text-justify">{content}</div>
  </motion.div>
);

const Propos = () => {
  return (
    <div className="pt-0">
      {/* En-tête avec image de fond */}
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center text-white text-center w-full"
        style={{
          backgroundImage: `url(${bgImage})`,
          marginTop: '-80px' // Ajuste selon la hauteur de ta navbar
        }}
      >
        <motion.h1
          className="text-5xl font-bold bg-black bg-opacity-60 p-6 rounded-xl"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Qui sommes-nous ?
        </motion.h1>
      </div>

      {/* Section en cartes */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid gap-10 md:grid-cols-2">
        <Card
          index={0}
          title="Pourquoi Ecogeste ?"
          content={
            <>
              <p>
                Ecogeste est né du constat que la prise de conscience écologique reste faible chez les jeunes.
                Or, l'avenir de notre planète repose en grande partie sur leurs actions quotidiennes.
              </p>
              <p className="mt-3">
                Grâce à ce projet, nous voulons démontrer que chaque geste compte, même le plus petit. Trier ses déchets,
                éteindre la lumière, économiser l'eau : autant d'actions qui ont un impact réel.
              </p>
            </>
          }
        />
        <Card
          index={1}
          title="Notre mission"
          content={
            <>
              <p>
                Nous avons pour mission de créer une communauté active et consciente des enjeux environnementaux.
                À travers des jeux éducatifs, des défis écologiques, et du contenu interactif, nous accompagnons les jeunes vers une transition durable.
              </p>
              <p className="mt-3">
                Nous croyons en un apprentissage par l’action : apprendre en faisant, en s'amusant, et en partageant.
              </p>
            </>
          }
        />
        <Card
          index={2}
          title="Nos engagements"
          content={
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li><strong>Éducation :</strong> Proposer des contenus accessibles et adaptés aux jeunes.</li>
              <li><strong>Actions concrètes :</strong> Organiser des campagnes de ramassage, reboisement, etc.</li>
              <li><strong>Inclusion :</strong> Impliquer les écoles, universités et quartiers populaires.</li>
              <li><strong>Technologie :</strong> Utiliser le numérique pour amplifier notre impact (applications, réseaux sociaux, quiz interactifs).</li>
            </ul>
          }
        />
        <Card
          index={3}
          title="Nos partenaires"
          content={
            <>
              <p>
                Pour atteindre nos objectifs, nous collaborons avec plusieurs organisations partageant notre vision :
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li><strong>Eco-Benin :</strong> Protection de la biodiversité et éducation environnementale.</li>
                <li><strong>Greenpeace :</strong> Campagnes globales pour le climat et les océans.</li>
                <li><strong>Les Amis de la Terre :</strong> Plaidoyer pour la justice environnementale.</li>
                <li><strong>Youth4Nature :</strong> Leadership des jeunes dans la protection de la nature.</li>
                <li><strong>WWF :</strong> Conservation des espèces et des habitats.</li>
              </ul>
              <p className="mt-3">Nous cherchons continuellement de nouveaux partenariats pour étendre notre portée.</p>
            </>
          }
        />
      </section>
    </div>
  );
};

export default Propos;
