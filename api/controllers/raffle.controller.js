'use strict';
var mongoose = require('mongoose'),
    Raffle = mongoose.model('Raffles');

function list_all_raffles (req, res) {
    Raffle.find({}, function (err, raffles) {
        if (err) {
            res.send(err);
        }
        res.json(raffles);
    });
}

function create_a_raffle (req, res) {
    var new_raffle = new Raffle(req.body);

    new_raffle.save(function (err, raffle) {
        if (err) {
            res.send(err);
        }
        res.json(raffle);
    });
}

function list_a_raffle (req, res) {
    Raffle.findById(req.params.id, function (err, raffle) {
        if (err) {
            res.send(err);
        }
        res.json(raffle);
    });
}

function update_a_raffle (req, res) {
    Raffle.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, raffle) {
        if (err) {
            res.send(err);
        }
        res.json(raffle)
    });
}

function validate_password (req, res) {
    Raffle.findById(req.params.id, function (err, raffle) {
        if (err) {
            res.status('404').send(err);
        }
        raffle.comparePassword(req.body.password, function (err, isMatch) {
            if (err) res.send(err);
            if (isMatch) {
                res.json(raffle);
            } else {
                res.status('401').send('Incorrect Password.');
            }
        });
    });
}

module.exports = {
    list_all_raffles: list_all_raffles,
    create_a_raffle: create_a_raffle,
    list_a_raffle: list_a_raffle,
    update_a_raffle: update_a_raffle,
    validate_password: validate_password
}
