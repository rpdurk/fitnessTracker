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

// allows access to public folder.
app.use(express.static('public'));

connectDB();

// routes
app.use(require("./routes/workoutRoutes.js"));
app.use(require("./routes/viewRoutes.js"));

app.listen(PORT, () => {
  console.log(`Server started listening on PORT- ${PORT}`);
});