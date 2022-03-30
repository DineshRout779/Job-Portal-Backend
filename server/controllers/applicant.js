const Applicant = require('../models/Applicant');

exports.getApplicantById = async (req, res, next, id) => {
  try {
    let applicant = await Applicant.findById(id);
    if (!applicant) {
      return res.status(404).json({
        error: 'Applicant not found',
      });
    }

    req.applicant = applicant;
    next();
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.getApplicant = (req, res) => {
  req.applicant.password = undefined;
  return res.json(req.applicant);
};

exports.updateApplicant = () => {
  //
};

exports.deleteApplicant = () => {
  //
};
