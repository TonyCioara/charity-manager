const Volunteer = require('../models/volunteer');

module.exports = (app) => {

    // form
    app.get('/charities/:charityId/volunteers/new', (req, res) => {
        res.render('volunteers-new', {charityId: req.params.charityId});
    });
};