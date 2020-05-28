const express  = require("express");
const router = express.Router();
const Event = require('../models/Event.model')
const getStandardResponse = require('../helper/standard-response')
const events_controller = require('../controllers/events.controller')
module.exports = router
var multer = require('multer')().single();
const GridFsStorage = require("multer-gridfs-storage");
const util = require("util");


// main routes
router.route('/')
    .get(events_controller.index)
    .post(events_controller.create_event);

// custom routes
router.get('/:id', events_controller.event_detail);

