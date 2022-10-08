const expres = require('express');
const router = expres.Router();


const { getMissingPersons, postMissingPerson, updateMissingPerson, getMissingPerson, deleteMissingPerson } = require('../controllers/MissingPerson.controller');

router.get('/missingPerson', getMissingPersons);
router.post('/missingPerson', postMissingPerson);
router.get('/missingPerson/:id', updateMissingPerson);
router.get('/missingPerson/:id', deleteMissingPerson);
router.get('/missingPerson/:id', getMissingPerson);
module.exports = router;