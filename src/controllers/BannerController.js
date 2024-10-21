const Banner = require('../models/Banner');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class BannerController {
    index(req, res, next) {
        Banner.find({})
            .then((banners) => res.json({ banner: mutipleMongooseToObject(banners) }))
            .catch(next);
    }

    item(req, res, next) {
        const id = req.query.id;
        Banner.find({})
            .then((banners) => {
                if (id === undefined) {
                    return res.json({ banner: mutipleMongooseToObject(banners) });
                } else {
                    const array = [...mutipleMongooseToObject(banners)];
                    const banner = array.find((b) => Number(b.id) === Number(id));
                    return res.json([banner]);
                }
            })
            .catch(next);
    }
}

module.exports = new BannerController();
