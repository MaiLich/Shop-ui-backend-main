const Address = require('../models/Address');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class AddressUserController {
    item(req, res, next) {
        const name = req.query.name;
        if (name !== undefined) {
            Address.findOne({ name: name })
                .then((address) => res.json([address]))
                .catch(next);
        } else {
            Address.find({})
                .then((address) => {
                    const addressAll = [...mutipleMongooseToObject(address)];
                    return res.json(addressAll);
                })
                .catch(next);
        }
    }
}

module.exports = new AddressUserController();
