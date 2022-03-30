const Applicant = require('../models/Applicant');
const bcrypt = require('bcrypt');
const Company = require('../models/Company');

exports.registerAsCompany = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      error: 'Please provide username, email and password!',
    });
  }

  const company = await Company.findOne({ email });
  if (company)
    return res.status(403).json({
      error: 'Company already exists',
    });

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const newCompany = new User({
      name,
      email,
      password: hashedPassword,
    });
    await newCompany.save();
    const { password, ...others } = newCompany._doc;

    return res.status(200).json('Company registered successfully!');
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.registerAsApplicant = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      error: 'Please provide username, email and password!',
    });
  }

  const applicant = await Applicant.findOne({ email });
  if (applicant)
    return res.status(403).json({
      error: 'Applicant already exists',
    });

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const newApplicant = new User({
      name,
      email,
      password: hashedPassword,
    });
    await newApplicant.save();
    const { password, ...others } = newApplicant._doc;

    return res.status(200).json('Applicant registered successfully!');
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.loginAsCompany = () => {};
exports.loginAsApplicant = () => {
  //
};
