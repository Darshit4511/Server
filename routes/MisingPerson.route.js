const express = express = require('express');
const router = express.Router();


const { getMissingPersons, postMissingPerson, updateMissingPerson, getMissingPerson, deleteMissingPerson } = require('../models/MissingPerson.model');

router.get('/', getMissingPersons);
router.post('/', postMissingPerson);
router.get('/:id', updateMissingPerson);
router.get('/:id', deleteMissingPerson);
router.get('/:id', getMissingPerson);
module.exports = router;