const Applicant = require('../models/Applicant');
const bcrypt = require('bcrypt');
const Company = require('../models/Company');
const jwt = require('jsonwebtoken');

exports.registerAsCompany = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      error: 'Please provide name, email and password!',
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
    const newCompany = new Company({
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

exports.registerAsApplicant = async (req, res) => {
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
    const newApplicant = new Applicant({
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

exports.loginAsCompany = async (req, res) => {
  const { email, password: clientPassword } = req.body;

  if (!email || !clientPassword) {
    return res.status(400).json({
      error: 'Please provide email and password!',
    });
  }

  try {
    const company = await Company.findOne({ email });

    if (!company) {
      return res.status(404).json({
        error: 'Company not registered!',
      });
    }

    const validPassword = await bcrypt.compare(
      clientPassword,
      company.password
    );
    if (!validPassword) {
      return res.status(403).json({
        error: 'Invalid credentials!',
      });
    }

    const token = jwt.sign({ _id: company._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    // res.cookie('token', token, { expire: new Date() + 9999 });

    const { password, ...others } = company._doc;

    return res.status(200).json({
      user: {
        ...others,
        token,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      err: err.message,
    });
  }
};

exports.loginAsApplicant = async (req, res) => {
  const { email, password: clientPassword } = req.body;

  if (!email || !clientPassword) {
    return res.status(400).json({
      error: 'Please provide email and password!',
    });
  }

  try {
    const applicant = await Applicant.findOne({ email });

    if (!applicant) {
      return res.status(404).json({
        error: 'Company not registered!',
      });
    }

    const validPassword = await bcrypt.compare(
      clientPassword,
      applicant.password
    );
    if (!validPassword) {
      return res.status(403).json({
        error: 'Invalid credentials!',
      });
    }

    const token = jwt.sign({ _id: applicant._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    // res.cookie('token', token, { expire: new Date() + 9999 });

    const { password, ...others } = applicant._doc;

    return res.status(200).json({
      user: {
        ...others,
        token,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      err: err.message,
    });
  }
};
