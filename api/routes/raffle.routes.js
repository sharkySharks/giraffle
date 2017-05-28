'use strict';

module.exports = function (app) {
    var raffle = require('../controllers/raffle.controller');

    app.route('/api/raffles/')
        .get(raffle.list_all_raffles)
        .post(raffle.create_a_raffle)

    app.route('/api/raffles/:id')
        .get(raffle.list_a_raffle)
        .put(raffle.update_a_raffle)
};
