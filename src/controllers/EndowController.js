const Endow = require('../models/Endow');

class EndowController {
    item(req, res, next) {
        if (req.query.id === undefined) {
            return res.json([]);
        } else {
            Endow.findOne({ id: req.query.id })
                .then((endow) => res.json([endow]))
                .catch(next);
        }
    }
}

module.exports = new EndowController();
