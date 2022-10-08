const Profiles = require('../models/MissingPerson.model');

const getMissingPersons = async (req, res) => {
    const missingPersons = await MissingPerson.find({}).select('-password');
    res.status(StatusCodes.OK).json({ missingPersons });
};
const postMissingPerson = async (req, res) => {
    const missingPerson = await MissingPerson.create(req.body);
    res.status(StatusCodes.CREATED).json({ missingPerson });
};
const deleteMissingPerson = async (req, res) => {
    const { id } = req.params;
    const missingPerson = await MissingPerson.findByIdAndDelete(id);
    res.status(StatusCodes.OK).json({ missingPerson });
};

const getMissingPerson = async (req, res) => {
    const missingPerson = await MissingPerson.findById(req.params.id).select('-password');
    res.status(StatusCodes.OK).json({ missingPerson });
};
const updateMissingPerson = async (req, res) => {
    const missingPerson = await MissingPerson.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(StatusCodes.OK).json({ missingPerson });
};

module.exports = {
    getMissingPersons,
    postMissingPerson,
    deleteMissingPerson,
    getMissingPerson,
    updateMissingPerson,
};