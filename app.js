const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/database')
var multer = require('multer')().single();
app.use(multer);
// app.use(express.urlencoded({ extended: false }))
// app.use(bodyParser.json());
 
// server port start
app.listen(3000)

// main routing
app.use('/event', require('./routes/events.route'));
