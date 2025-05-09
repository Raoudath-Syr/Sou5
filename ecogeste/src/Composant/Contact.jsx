import React, { useState } from "react";

export default function Contact() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // TODO : connecter à ton backend s'il y a un endpoint
      // await axios.post("http://localhost:3000/api/contact", contactData);
      setFeedback("✅ Message envoyé avec succès !");
      setContactData({ name: "", email: "", message: "" });
    } catch (error) {
      setFeedback("❌ Une erreur est survenue.");
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mt-9">Contactez-nous</h1>
      <p className="text-center text-gray-600 mt-5">
        Tu as une question, une suggestion ou envie de nous rejoindre ? Écris-nous !
      </p>

      {feedback && (
        <p className="text-center mt-4 font-semibold text-green-600">{feedback}</p>
      )}

      <div className="grid md:grid-cols-2 gap-10 bg-white p-6 rounded-2xl shadow-md mt-6">
        {/* Formulaire de contact */}
        <form className="grid gap-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Nom</label>
            <input
              name="name"
              type="text"
              placeholder="Ton nom"
              value={contactData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Ton email"
              value={contactData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              placeholder="Ton message"
              rows="5"
              value={contactData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition"
          >
            Envoyer le message
          </button>
        </form>

        {/* Carte Google Maps */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Notre Localisation</h2>
          <p className="text-gray-700 mb-4">Abomey-Calavi, Quartier Zoca</p>
          <iframe
            title="Localisation Abomey-Calavi Zoca"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.469128428063!2d2.3520378736254166!3d6.462094993529499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sfr!2sbj!4v1746371756236!5m2!1sfr!2sbj"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
