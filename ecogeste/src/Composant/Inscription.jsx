import React, { useState } from "react";
import axios from "axios";

export default function Inscription() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/users/register", formData);
      setMessage(" Utilisateur inscrit avec succès !");
      console.log(res.data);
      setFormData({ name: "", email: "", password: "" });
    } catch (error) {
      setMessage(" Erreur : " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mt-9">Inscription</h1>
      <p className="text-center text-gray-600 mt-4">
        Remplis ce formulaire pour créer ton compte.
      </p>

      {message && (
        <p className="text-center mt-4 font-semibold text-red-500">{message}</p>
      )}

      <form className="grid gap-6 bg-white p-6 mt-6 rounded-xl shadow" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Ton nom"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Ton email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Mot de passe"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition"
        >
          S'inscrire
        </button>
      </form>

      <div className="text-center mt-6">
        <a
          href="http://localhost:3000/api/users/register"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
        
        </a>
      </div>
    </div>
  );
}
