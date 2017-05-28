'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RaffleSchema = new Schema({
    name: {
        type: String,
        required: 'Please give the Raffle a name.'
    },
    entries: {
        type: Array,
        default: []
    },
    status: {
        type: String,
        default: 'open'
    }
});

module.exports = mongoose.model('Raffles', RaffleSchema);
