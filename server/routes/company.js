const { getCompanyById, getCompany } = require('../controllers/company');
const router = require('express').Router();

router.param('companyId', getCompanyById);

// get all applicants
router.get('/:companyId', getCompany);

// get applicant
router.get('/:id', registerAsCompany);

module.exports = router;
