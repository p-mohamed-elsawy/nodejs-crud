const Event = require('../models/Event.model')
const getStandardResponse = require('../helper/standard-response')
const db = require('../config/database')





exports.index = function(req, response) {
    Event.find({},(err,data)=>{
        response.json(getStandardResponse(response,err,data));
    })
};

exports.event_detail = function(req, response) {
    Event.findById({_id:req.params.id}, (err,data) => {
        response.json(getStandardResponse(response,err,data));
    });
};

exports.create_event = function(req, response) {

 

    
    Event.create(
        {
            image: req.body.image,

            title:req.body.title,
            description:req.body.description,
            location:req.body.location,
            date:req.body.date,
        }, (err,data) => {
        response.json(getStandardResponse(response,err,data));
    });
};