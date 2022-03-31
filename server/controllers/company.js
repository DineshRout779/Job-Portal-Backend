const Company = require('../models/Company');

exports.getCompanyById = async (req, res, next, id) => {
  try {
    let company = await Company.findById(id);
    if (!company) {
      return res.status(404).json({
        error: 'Company not found',
      });
    }

    req.company = company;
    next();
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.getCompany = (req, res) => {
  req.company.password = undefined;
  return res.json(req.company);
};
