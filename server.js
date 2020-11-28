require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path');
const { connectDB } = require('./config/connection');

const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

connectDB();

// if (process.env.NODE_ENV === 'production') {
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
  });
  app.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/exercise.html'));
  });
  app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/stats.html'));
  });
// };

app.listen(PORT, () => {
  console.log('Server started listening on PORT http://localhost:3001');
});