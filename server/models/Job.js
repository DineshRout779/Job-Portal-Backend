const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
    },
    company: { type: mongoose.Schema.ObjectId, ref: 'Company' },
    position: {
      type: String,
      maxlength: 32,
    },
    jobType: {
      type: String,
      enum: ['full-time', 'part-time', 'remote', 'internship'],
      default: 'full-time',
    },
    applicants: [{ type: mongoose.Schema.ObjectId, ref: 'Applicant' }],
    location: {
      type: String,
      maxlength: 32,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Job', JobSchema);
