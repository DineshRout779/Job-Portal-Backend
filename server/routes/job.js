const { getApplicantById } = require('../controllers/applicant');
const { getCompanyById } = require('../controllers/company');
const {
  getJobById,
  getJob,
  createJob,
  getAllJobs,
  applyJob,
} = require('../controllers/job');

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
router.put('/:jobId/:applicantId', applyJob);

module.exports = router;
