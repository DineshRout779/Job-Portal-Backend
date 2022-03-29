const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// middlewares
app.use(express.json());
app.use(morgan('common'));
app.use(cors());

const PORT = process.env.PORT || 5000;

// connect to database
connectDB();

// routes
app.get('/api', (req, res) => {
  res.send('Hello world!!');
});

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
