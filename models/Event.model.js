const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    image: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

let Event = mongoose.model('Event', eventSchema, 'events')

module.exports = Event