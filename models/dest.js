const mongoose = require('mongoose')

const destSchema = new mongoose.Schema({
    destName: {
        type: String,
        required: true
    },
    fareFlight1: {
        type: Number,
        required: true
    },
    fareFlight2: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model('Destination', destSchema)