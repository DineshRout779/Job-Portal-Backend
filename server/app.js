const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const jobRoutes = require('./routes/job');
const applicantRoutes = require('./routes/applicant');
const companyRoutes = require('./routes/company');
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
app.use('/api/auth', authRoutes);
app.use('/api/job', jobRoutes);
app.use('/api/applicant', applicantRoutes);
app.use('/api/company', companyRoutes);

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
