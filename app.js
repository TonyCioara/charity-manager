const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
var exphbs = require('express-handlebars');

const app = express();

const port = process.env.PORT || 3000;
const dbURI = process.env.DBURI || 'mongodb://localhost/charity-manager';

mongoose.connect(dbURI);

app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({urlencoded: true}));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

require('./controllers/charities.js')(app);
require('./controllers/volunteers.js')(app);

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});