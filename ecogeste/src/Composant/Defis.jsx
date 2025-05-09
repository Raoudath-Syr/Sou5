import React, { useState } from "react";
import { Card, CardContent } from "../Composant/Card";
import ecog1 from "../assets/ecog1.jpg";

const defisData = {
  journalier: [
    { titre: "Éteindre les lumières inutiles", description: "Avant de quitter une pièce, assure-toi que la lumière est éteinte." },
    { titre: "Utiliser une gourde", description: "Évite les bouteilles en plastique jetables et utilise une gourde réutilisable." },
    { titre: "Prendre une douche courte", description: "Limite ta douche à 5 minutes pour économiser l’eau." },
    { titre: "Recycler ses déchets", description: "Trie tes déchets chaque jour : plastique, papier, verre, organique." }
  ],
  mensuel: [
    { titre: "Organiser un nettoyage de quartier", description: "Mobilise des amis ou voisins pour nettoyer un espace public." },
    { titre: "Acheter local", description: "Fais tes courses dans un marché local pour réduire l’empreinte carbone." },
    { titre: "Planter un arbre", description: "Contribue à reverdir ton environnement en plantant un arbre." },
    { titre: "Réduire sa consommation d’énergie", description: "Débranche les appareils inutilisés et remplace les ampoules par des LED." }
  ],
  annuel: [
    { titre: "Bilan écologique personnel", description: "Évalue ton impact environnemental et fixe-toi des objectifs verts." },
    { titre: "Vacances éco-responsables", description: "Planifie un voyage en limitant ton empreinte carbone." },
    { titre: "Réduire le plastique à long terme", description: "Change progressivement tes habitudes pour utiliser moins de plastique." },
    { titre: "Participer à un projet environnemental", description: "Engage-toi dans une ONG, un club vert ou un projet écologique." }
  ]
};

const CalendarView = ({ defi }) => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [image, setImage] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = (e) => {
    const date = e.target.value;
    if (!selectedDates.includes(date)) {
      setSelectedDates([...selectedDates, date]);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const completionPercentage = Math.min((selectedDates.length / 30) * 100, 100);

  return (
    <div className="bg-green-100 shadow-md rounded-2xl p-5 hover:shadow-xl transition duration-300">
      <Card>
        <CardContent>
          <h3 className="text-xl font-bold text-green-900 mb-2">{defi.titre}</h3>
          <p className="text-gray-700 mb-4">{defi.description}</p>

          <button onClick={() => setShowCalendar(!showCalendar)} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition mb-4">
            {showCalendar ? "Masquer le calendrier" : "Relever le défi"}
          </button>

          {showCalendar && (
            <>
              <input type="date" onChange={handleDateChange} className="mb-3 block" />
              <ul className="text-sm text-green-700 mb-3">
                {selectedDates.map((date, index) => (
                  <li key={index}>✔ Défi réalisé le {date}</li>
                ))}
              </ul>

              <div className="w-24 h-24 relative mx-auto my-4">
                <svg className="absolute top-0 left-0" viewBox="0 0 36 36">
                  <path className="text-gray-300" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path className="text-green-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" fill="none" strokeDasharray={`${completionPercentage}, 100`} stroke="currentColor" strokeWidth="2" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-green-700 font-bold">
                  {Math.round(completionPercentage)}%
                </div>
              </div>

              <label className="block text-sm font-medium text-gray-700 mb-1">Ajoute une photo comme preuve :</label>
              <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-2 file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-green-600 file:text-white hover:file:bg-green-700" />
              {image && <img src={image} alt="preuve" className="w-full h-40 object-cover rounded-md" />}
              <p className="text-sm text-green-700 mt-2 font-medium">Points : {selectedDates.length * 20}</p>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

const DefiCard = ({ defi }) => {
  const [checkedDays, setCheckedDays] = useState([]);
  const [image, setImage] = useState(null);
  const [showDays, setShowDays] = useState(false);

  const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

  const toggleDay = (day) => {
    setCheckedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-green-100 shadow-md rounded-2xl p-5 hover:shadow-xl transition duration-300">
      <Card>
        <CardContent>
          <h3 className="text-xl font-bold text-green-900 mb-2">{defi.titre}</h3>
          <p className="text-gray-700 mb-4">{defi.description}</p>

          <button onClick={() => setShowDays(!showDays)} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition mb-3">
            {showDays ? "Masquer" : "Relever le défi"}
          </button>

          {showDays && (
            <>
              <div className="flex flex-wrap gap-2 mb-3">
                {days.map((day) => (
                  <button key={day} onClick={() => toggleDay(day)} className={`px-2 py-1 rounded-full text-sm border ${checkedDays.includes(day) ? "bg-green-500 text-white" : "bg-white text-green-700 border-green-400"}`}>
                    {day}
                  </button>
                ))}
              </div>

              <label className="block text-sm font-medium text-gray-700 mb-1">Ajoute une photo comme preuve :</label>
              <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-2 file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-green-600 file:text-white hover:file:bg-green-700" />
              {image && <img src={image} alt="preuve" className="w-full h-40 object-cover rounded-md" />}
              <p className="text-sm text-green-700 mt-2 font-medium">Points : {checkedDays.length * 10}</p>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

const SectionDefis = ({ titre, defis, type }) => (
  <section className="mb-14">
    <h2 className="text-2xl font-bold mb-6 text-white">{titre}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {defis.map((defi, index) =>
        type === "journalier" ? (
          <DefiCard key={index} defi={defi} />
        ) : (
          <CalendarView key={index} defi={defi} />
        )
      )}
    </div>
  </section>
);

export default function DefisPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center px-4 py-10"
      style={{ backgroundImage: `url(${ecog1})` }}
    >
      <h1 className="text-4xl font-bold text-center text-green-800 mt-6 bg-white bg-opacity-80 p-4 rounded-xl">
        Défis Éco-gestes
      </h1>

      <p className="text-center text-lg text-gray-700 mt-4 max-w-2xl mx-auto bg-white bg-opacity-80 p-4 rounded-xl">
        Adopter des éco-gestes quotidiens, mensuels ou annuels est essentiel pour protéger notre planète. Chaque petit geste compte : en changeant nos habitudes, nous contribuons à un futur plus durable pour tous.
      </p>

      <SectionDefis titre="Défis journaliers" defis={defisData.journalier} type="journalier" />
      <SectionDefis titre="Défis mensuels" defis={defisData.mensuel} type="calendrier" />
      <SectionDefis titre="Défis annuels" defis={defisData.annuel} type="calendrier" />
    </div>
  );
}
