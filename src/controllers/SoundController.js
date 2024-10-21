const Sound = require('../models/Sound');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SoundController {
    index(req, res, next) {
        const page = req.query._page;
        const pageSize = req.query._limit;
        const startIndex = (page - 1) * pageSize;
        const category = req.query.category;
        const id = req.query.id;

        Sound.find({})
            .then((sounds) => {
                const array = [...mutipleMongooseToObject(sounds)];
                if (id !== undefined) {
                    const sound = array.find((b) => String(b._id) === String(id));
                    return res.json([sound]);
                } else if (category !== undefined && pageSize !== undefined && page !== undefined) {
                    const sound = array.filter((b) => b.category === category);
                    const items = sound.slice(Number(startIndex), Number(startIndex) + Number(pageSize));
                    return res.json([...items]);
                } else if (pageSize !== undefined && page !== undefined) {
                    const items = array.slice(Number(startIndex), Number(startIndex) + Number(pageSize));
                    return res.json([...items]);
                } else if (category !== undefined) {
                    const sound = array.filter((b) => b.category === category);
                    return res.json([...sound]);
                } else {
                    return res.json([...array]);
                }
            })
            .catch(next);
    }
    item(req, res, next) {
        Sound.findOne({ path: req.params.slug })
            .then((item) => res.json([item]))
            .catch(next);
    }
}

module.exports = new SoundController();
