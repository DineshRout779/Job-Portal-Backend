const mongoose = require('mongoose');

const ApplicantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      maxlength: 1000,
    },
    location: {
      type: String,
      maxlength: 32,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Applicant', ApplicantSchema);
