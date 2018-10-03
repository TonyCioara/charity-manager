const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VolunteerSchema = new Schema({
    name: { type: String, required: true},
    volunteerHours: { type: String, required: true},
    charityId: { type: String, required: true}
});

module.exports = mongoose.model('Volunteer', VolunteerSchema);
