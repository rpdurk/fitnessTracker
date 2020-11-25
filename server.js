const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected'))
  .catch(e => console.log(e));
mongoose.set('debug', true);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
  });
  app.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/exercise.html'));
  });
  app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/stats.html'));
  });

app.listen(PORT, () => {
  console.log('Server started listening on PORT http://localhost:3001');
});