const Volunteer = require('../models/volunteer');

module.exports = (app) => {

    // form
    app.get('/charities/:charityId/volunteers/new', (req, res) => {
        res.render('volunteers-new', {charityId: req.params.charityId});
    });

    // create
    app.post('/charities/:charityId/volunteers/new', (req, res) => {
        Volunteer.create(req.body).then(volunteer => {
            res.redirect(`/charities/${volunteer.charityId}`);
        }).catch(err => {
            console.log(err.message);
        });
    });

    // edit form
    app.get('/charities/:charityId/volunteers/:id/edit', (req, res) => {
        res.render('volunteers-edit', {charityId: req.params.charityId, volunteerId: req.params.id});
    });

    app.put('/charities/:charityId/volunteers/:id/edit', (req, res) => {
        Volunteer.findByIdAndUpdate(req.params.id, req.body).then(volunteer => {
            res.redirect(`/charities/${volunteer.charityId}`)
        }).catch(err => {
            console.log(`There was a problem updating: ${err.message}`);
        });
    });

};