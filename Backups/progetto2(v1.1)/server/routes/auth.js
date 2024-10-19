const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    console.log('Richiesta di registrazione ricevuta:', req.body);
    const { username, email, password } = req.body;
    console.log('Dati estratti:', { username, email, password: '***' });
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Password hashata');
    const user = new User({ username, email, password: hashedPassword });
    console.log('Modello utente creato');
    await user.save();
    console.log('Utente salvato nel database');
    res.status(201).json({ message: 'Utente registrato con successo' });
  } catch (error) {
    console.error('Errore dettagliato durante la registrazione:', error);
    res.status(500).json({ message: 'Errore durante la registrazione', error: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Credenziali non valide' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Credenziali non valide' });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Errore durante il login' });
  }
});

module.exports = router;
