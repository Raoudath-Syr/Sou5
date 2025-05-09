import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/jeux2.jpg';

const quizzes = {
  eau: [
    {
      question: "Quel geste réduit le plus ta consommation d’eau ?",
      options: ["Laver sa voiture", "Prendre une douche courte", "Remplir une piscine"],
      answer: "Prendre une douche courte"
    },
    {
      question: "Quelle est la principale source de pollution de l’eau ?",
      options: ["Les bateaux", "Déversements industriels", "Les animaux"],
      answer: "Déversements industriels"
    },
    {
      question: "Quel est l'impact des toilettes qui fuient ?",
      options: ["Aucun", "Très faible", "Significatif"],
      answer: "Significatif"
    },
    {
      question: "Comment économiser de l'eau en cuisine ?",
      options: ["En utilisant des casseroles plus petites", "En fermant l'eau pendant qu'on fait la vaisselle", "En lavant les légumes à grande eau"],
      answer: "En fermant l'eau pendant qu'on fait la vaisselle"
    },
    {
      question: "Les robinets à faible débit réduisent-ils la consommation d’eau ?",
      options: ["Oui", "Non", "Parfois"],
      answer: "Oui"
    }
  ],
  dechets: [
    {
      question: "Combien de temps met une bouteille plastique à se décomposer ?",
      options: ["10 ans", "100 ans", "450 ans"],
      answer: "450 ans"
    },
    {
      question: "Le compost réduit-il les déchets organiques ?",
      options: ["Oui", "Non", "Parfois"],
      answer: "Oui"
    },
    {
      question: "Que faire avec les piles usagées ?",
      options: ["Les jeter dans la poubelle classique", "Les recycler", "Les enterrer dans le jardin"],
      answer: "Les recycler"
    },
    {
      question: "Quels matériaux sont les plus recyclés ?",
      options: ["Le plastique", "Le verre", "Le papier"],
      answer: "Le verre"
    },
    {
      question: "Les déchets organiques peuvent-ils être compostés ?",
      options: ["Oui", "Non", "Parfois"],
      answer: "Oui"
    }
  ],
  environnement: [
    {
      question: "Qu’est-ce que l’effet de serre ?",
      options: ["Refroidissement du climat", "Accumulation de chaleur par certains gaz", "Un ouragan"],
      answer: "Accumulation de chaleur par certains gaz"
    },
    {
      question: "Quel gaz est le plus responsable ?",
      options: ["CO2", "Oxygène", "Azote"],
      answer: "CO2"
    },
    {
      question: "Quel est l'impact de la déforestation ?",
      options: ["Rend l'air plus pur", "Réduit la biodiversité", "Accélère la croissance économique"],
      answer: "Réduit la biodiversité"
    },
    {
      question: "Quel est l'effet des énergies renouvelables sur l'environnement ?",
      options: ["Ils augmentent la pollution", "Ils réduisent la pollution", "Ils n'ont aucun effet"],
      answer: "Ils réduisent la pollution"
    },
    {
      question: "Les énergies fossiles sont-elles renouvelables ?",
      options: ["Oui", "Non", "Parfois"],
      answer: "Non"
    }
  ],
  emissions_gaz: [
    {
      question: "Quel est le principal gaz à effet de serre produit par les transports ?",
      options: ["CO2", "Méthane", "Oxyde d'azote"],
      answer: "CO2"
    },
    {
      question: "Quel secteur émet le plus de gaz à effet de serre ?",
      options: ["L'agriculture", "L'industrie", "Les transports"],
      answer: "L'industrie"
    },
    {
      question: "Quels gaz sont responsables du changement climatique ?",
      options: ["CO2 et O2", "CO2 et méthane", "CO2 et azote"],
      answer: "CO2 et méthane"
    },
    {
      question: "Le recyclage aide-t-il à réduire les émissions de gaz ?",
      options: ["Oui", "Non", "Parfois"],
      answer: "Oui"
    },
    {
      question: "Les voitures électriques émettent-elles des gaz à effet de serre ?",
      options: ["Oui", "Non", "Seulement pendant la production"],
      answer: "Seulement pendant la production"
    }
  ],
  jeu_ecologique: [
    {
      question: "Quelle action a le plus grand impact pour réduire ton empreinte écologique ?",
      options: ["Réduire la consommation de viande", "Utiliser des transports en commun", "Consommer localement"],
      answer: "Réduire la consommation de viande"
    },
    {
      question: "Les panneaux solaires sont-ils une source d'énergie renouvelable ?",
      options: ["Oui", "Non", "Parfois"],
      answer: "Oui"
    },
    {
      question: "Quelle est l'importance de consommer localement ?",
      options: ["Réduit l'empreinte carbone", "Ne change rien", "Augmente la consommation d'énergie"],
      answer: "Réduit l'empreinte carbone"
    },
    {
      question: "La consommation d'eau a-t-elle un impact sur l'environnement ?",
      options: ["Oui", "Non", "Parfois"],
      answer: "Oui"
    },
    {
      question: "Utiliser des sacs en plastique est-il mauvais pour l'environnement ?",
      options: ["Oui", "Non", "Parfois"],
      answer: "Oui"
    }
  ],
  autre_jeu: [
    {
      question: "Quel déchet est le plus facilement recyclable ?",
      options: ["Verre", "Plastique", "Aluminium"],
      answer: "Verre"
    },
    {
      question: "Quel est le meilleur moment pour arroser les plantes ?",
      options: ["À midi", "Le soir", "Le matin"],
      answer: "Le matin"
    },
    {
      question: "Quel est l'impact des aliments transformés sur l'environnement ?",
      options: ["Négatif", "Neutre", "Positif"],
      answer: "Négatif"
    },
    {
      question: "Que signifie l'acronyme 'RSE' ?",
      options: ["Responsabilité Sociétale des Entreprises", "Réduction des Statistiques de l'Environnement", "Régulation Sociale Écologique"],
      answer: "Responsabilité Sociétale des Entreprises"
    },
    {
      question: "Est-il préférable de réparer ou de jeter un appareil défectueux ?",
      options: ["Réparer", "Jeter", "Les deux"],
      answer: "Réparer"
    }
  ]
};

const colorThemes = {
  eau: { background: 'bg-blue-500', text: 'text-white' },
  dechets: { background: 'bg-green-500', text: 'text-white' },
  environnement: { background: 'bg-yellow-500', text: 'text-black' },
  emissions_gaz: { background: 'bg-red-500', text: 'text-white' },
  jeu_ecologique: { background: 'bg-purple-500', text: 'text-white' },
  autre_jeu: { background: 'bg-orange-400', text: 'text-black' }
};

const Jeu = () => {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(15);
  const [feedback, setFeedback] = useState(null); // Pour afficher le message de feedback
  const [feedbackColor, setFeedbackColor] = useState('text-green-500'); // Couleur du feedback

  const currentQuiz = selectedTheme ? quizzes[selectedTheme] : [];
  const currentColor = selectedTheme ? colorThemes[selectedTheme] : { background: '', text: '' };

  useEffect(() => {
    if (selectedTheme && timer > 0) {
      const countdown = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(countdown);
    } else if (timer === 0) {
      handleNextQuestion();
    }
  }, [timer, selectedTheme]);

  const handleAnswer = (option) => {
    const correct = currentQuiz[currentIndex].answer;
    if (option === correct) {
      setFeedback("Bravo, tu as trouvé la bonne réponse !");
      setFeedbackColor('text-green-500');
      setScore(score + 1);
    } else {
      setFeedback(`Dommage, la bonne réponse était : ${correct}`);
      setFeedbackColor('text-red-500');
    }
    setTimeout(() => handleNextQuestion(), 1000); // Attendre 1 seconde avant de passer à la question suivante
  };

  const handleNextQuestion = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= currentQuiz.length) {
      setTimeout(() => {
        alert(`Quiz terminé ! Ton score est : ${score}/${currentQuiz.length}`);
        setSelectedTheme(null);
        setCurrentIndex(0);
        setScore(0);
        setFeedback(null);
      }, 1000);
    } else {
      setCurrentIndex(nextIndex);
      setTimer(15);
      setFeedback(null); // Réinitialiser le feedback
    }
  };

  return (
    <motion.div
      className="min-h-screen p-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundColor: 'rgba(0,0,0,0.7)', backgroundBlendMode: 'multiply' }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {selectedTheme ? (
        <div className={`${currentColor.background} ${currentColor.text} p-6 rounded-2xl shadow-lg max-w-xl mx-auto`}>
          <h2 className="text-2xl font-bold mb-2 capitalize">{selectedTheme.replace('_', ' ')} - Question {currentIndex + 1}</h2>
          <p className="text-lg mb-4">{currentQuiz[currentIndex].question}</p>

          <div className="space-y-3">
            {currentQuiz[currentIndex].options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(option)}
                className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition"
              >
                {option}
              </button>
            ))}
          </div>

          <div className="mt-4 text-right font-semibold text-orange-100">
            ⏱️ Temps restant : {timer}s
          </div>
          <div className="mt-2 text-right font-medium text-green-700">
            Score : {score}
          </div>

          {feedback && (
            <div className={`mt-2 text-center text-lg font-semibold ${feedbackColor}`}>
              {feedback}
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="mt-20 text-center">
            <p className="text-xl font-bold text-white">Commencez à jouer en choisissant un thème :</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
            {Object.keys(quizzes).map((theme, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-xl shadow-lg ${colorThemes[theme]?.background} ${colorThemes[theme]?.text} hover:bg-opacity-90 transition font-semibold text-lg`}
                onClick={() => {
                  setSelectedTheme(theme);
                  setCurrentIndex(0);
                  setScore(0);
                  setTimer(15);
                  setFeedback(null);
                }}
              >
                Quiz sur {theme.replace('_', ' ')}
              </motion.button>
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Jeu;
