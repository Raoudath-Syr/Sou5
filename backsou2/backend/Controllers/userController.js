const User = require ('../models/userModel');
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Vérifier que tous les champs sont présents
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Tous les champs sont requis." });
    }

    // Vérifier si l'utilisateur existe déjà
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Utilisateur déjà existant." });
    }

    // Créer l'utilisateur
    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: "Utilisateur créé avec succès", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

// Obtenir tous les utilisateurs
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

module.exports = {
  registerUser,
  getAllUsers,
};
