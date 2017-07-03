'use strict';

var bcrypt = require('bcrypt');
var mongoose = require('mongoose');
var SALT_WORK_FACTOR = 10;
var Schema = mongoose.Schema;

var RaffleSchema = new Schema({
    name: {
        type: String,
        required: 'Please give the raffle a name.'
    },
    password: {
        type: String,
        required: 'Please enter a raffle password to be able to draw winners.'
    },
    entries: {
        type: Array,
        default: []
    },
    winners: {
        type: Array,
        default: []
    }
});

RaffleSchema.pre('save', function (next) {
    var user = this;

    if (!user.isModified('password')) return next;

    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});

RaffleSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
}

module.exports = mongoose.model('Raffles', RaffleSchema);
