const BannerSmall = require('../models/BannerSmall');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class BannerSmallController {
    index(req, res, next) {
        BannerSmall.find({})
            .then((banners) => res.json(mutipleMongooseToObject(banners)))
            .catch(next);
    }
}

module.exports = new BannerSmallController();
