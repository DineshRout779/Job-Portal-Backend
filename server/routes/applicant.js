const { getApplicant, getApplicantById } = require('../controllers/applicant');

const router = require('express').Router();

router.param('applicantId', getApplicantById);

// // get all applicants
// router.get('/', registerAsUser);

// get applicant
router.get('/:applicantId', getApplicant);

// edit applicant
// router.put('/:applicantId', updateApplicant);

// // delete applicant
// router.delete('/:applicantId', deleteApplicant);

module.exports = router;
