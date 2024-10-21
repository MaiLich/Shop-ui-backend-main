const Client = require('../models/Client');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class ClientController {
    itemPost(req, res, next) {
        const newClient = new Client(req.body);
        newClient.save();
    }
    itemGet(req, res, next) {
        Client.findOne({ _id: req.query.id })
            .then((client) => res.json(client))
            .catch(next);
    }
}

module.exports = new ClientController();
