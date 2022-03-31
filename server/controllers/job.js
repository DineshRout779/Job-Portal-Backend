const Job = require('../models/Job');

exports.getJobById = async (req, res, next, id) => {
  try {
    let job = await Job.findById(id)
      .populate('company', '_id name')
      .populate('applicants', '_id name');
    if (!job) {
      return res.status(404).json({
        error: 'Job not found',
      });
    }

    req.job = job;
    next();
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.getJob = (req, res) => {
  return res.json(req.job);
};

exports.getAllJobs = async (req, res) => {
  try {
    let jobs = await Job.find()
      .populate('company', '_id name')
      .populate('applicants', '_id name');

    return res.status(200).json(jobs);
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.createJob = async (req, res) => {
  const newJob = new Job(req.body);
  const { title, position, jobType, location } = req.body;

  if ((!title, !position, !jobType, !location)) {
    return res.status(400).json({
      error: 'All fields are required!',
    });
  }

  try {
    let savedJob = await newJob.save();
    savedJob = await savedJob
      .populate('company', '_id name')
      .populate('applicants', '_id name');
    return res.status(201).json(savedJob);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.applyJob = (req, res) => {
  //
};
