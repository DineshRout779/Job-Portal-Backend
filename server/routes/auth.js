const {
  registerAsCompany,
  registerAsApplicant,
  loginAsCompany,
  loginAsApplicant,
} = require('../controllers/auth');

const router = require('express').Router();

router.post('/register/company', registerAsCompany);

router.post('/register/applicant', registerAsApplicant);

router.post('/login/company', loginAsCompany);

router.post('/login/applicant', loginAsApplicant);

module.exports = router;
