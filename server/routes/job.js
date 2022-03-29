const { getApplicantById } = require('../controllers/applicant');
const { getCompanyById } = require('../controllers/company');

const router = require('express').Router();

router.param('jobId', getJobById);
router.param('companyId', getCompanyById);
router.param('applicantId', getApplicantById);

// get all jobs
router.get('/', getAllJobs);

// get job
router.get('/:jobId', getJob);

// create job
router.post('/:companyId', createJob);

// apply job
router.put('/:jobId/:applicantId', createJob);

module.exports = router;
