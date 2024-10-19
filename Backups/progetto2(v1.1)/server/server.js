require('dotenv').config({ path: './server/.env' });
const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');


const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Configurazione del body parser per le richieste JSON
  server.use(express.json());

  // Se hai bisogno di supporto per dati form-urlencoded, aggiungi anche questa riga
  server.use(express.urlencoded({ extended: true }));

  // Connessione a MongoDB
  console.log('MONGODB_URI:', process.env.MONGODB_URI);

  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connesso a MongoDB'))
    .catch(err => {
      console.error('Errore di connessione a MongoDB:', err);
      process.exit(1);  // Termina il processo se non riesce a connettersi
    });

  // Route per l'autenticazione
  server.use('/api/auth', authRoutes);

  // Gestisci tutte le altre richieste con Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
