const { getCompanyById, getCompany } = require('../controllers/company');
const router = require('express').Router();

router.param('companyId', getCompanyById);

router.get('/:companyId', getCompany);

module.exports = router;
