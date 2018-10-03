const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
var exphbs = require('express-handlebars');

const port = process.env.PORT || 3000;
const dbURI = process.env.DBURI || 'mongodb://localhost/charity-manager';

mongoose.connect(dbURI);

app.use(express.static('public'));
app.use(bodyParser.urlencoded({urlencoded: true}));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

require('./controllers/charities.js')(app);
require('./controllers/volunteers.js')(app);

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});