// backend/Server.js

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000; // ou un autre port si tu veux

// Middleware
app.use(express.json());
const userRoutes = require('./Route/userRoutes');
app.use('/api/users', userRoutes);

// Route de test
app.get('/', (req, res) => {
  res.send('API opérationnelle');
});

// Connexion à MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/defisDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ Connexion à MongoDB réussie');
  app.listen(PORT, () => console.log(` Serveur lancé sur le port ${PORT}`));
})
.catch(err => {
  console.error('Erreur de connexion à MongoDB :', err.message);
});
