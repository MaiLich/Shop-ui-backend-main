const BannerPage = require('../models/BannerPage');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class BannerPageController {
    item(req, res, next) {
        const name = req.query.name;

        BannerPage.findOne({ name: name })
            .then((items) => res.json([items]))
            .catch(next);
    }
}

module.exports = new BannerPageController();
