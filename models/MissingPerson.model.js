const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let MissingPerson = new Schema({
    MissingPerson_name: {
        type: String
    },
    MissingPerson_dob: {
        type: String
    },
    MissingPerson_adhar: {
        type: String
    },
    MissingPerson_finger: {
        type: String
    },
    MissingPerson_area: {
        type: String
    },
    MissingPerson_contact: {
        type: String
    },
    MissingPerson_type: {
        type: String
    }
});
module.exports = mongoose.model('MissingPerson', MissingPerson);