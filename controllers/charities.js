const Charity = require('../models/charity');
const Volunteer = require('../models/volunteer');

module.exports = (app) => {

    // index
    app.get('/', (req, res) => {
        Charity.find({}, (err, charities) => {
            console.log(`CHARITIES: ${charities}`);
            res.render('charities-index', {charities: charities});
        });
    });

    // form
    app.get('/charities/new', (req, res) => {
        res.render('charities-new');
    });

    // create
    app.post('/charities/new', (req, res) => {
        Charity.create(req.body).then(charity => {
            res.redirect(`/charities/${charity._id}`);
        }).catch(err => {
            console.log(err.message);
        });
    });

    // show
    app.get('/charities/:id', (req, res) => {
        Charity.findById(req.params.id).then(charity => {
            Volunteer.find({charityId: req.params.id}).then(volunteers => {
                console.log(`Volunteers: ${volunteers}`);
                res.render('charities-show', {charity: charity, volunteers: volunteers});
            }).catch(err => {
                console.log(err);
            });
        });
    });

    // edit form
    app.get('/charities/:id/edit', (req, res) => {
        res.render('charities-edit');
    });
};