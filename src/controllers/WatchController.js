const Watch = require('../models/Watch');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class WatchController {
    index(req, res, next) {
        const page = req.query._page;
        const pageSize = req.query._limit;
        const startIndex = (page - 1) * pageSize;
        const category = req.query.category;
        const id = req.query.id;

        Watch.find({})
            .then((watchs) => {
                const array = [...mutipleMongooseToObject(watchs)];
                if (id !== undefined) {
                    const watch = array.find((b) => String(b._id) === String(id));
                    return res.json([watch]);
                } else if (category !== undefined && pageSize !== undefined && page !== undefined) {
                    const watch = array.filter((b) => b.category === category);
                    const items = watch.slice(Number(startIndex), Number(startIndex) + Number(pageSize));
                    return res.json([...items]);
                } else if (pageSize !== undefined && page !== undefined) {
                    const items = array.slice(Number(startIndex), Number(startIndex) + Number(pageSize));
                    return res.json([...items]);
                } else if (category !== undefined) {
                    const watch = array.filter((b) => b.category === category);
                    return res.json([...watch]);
                } else {
                    return res.json([...array]);
                }
            })
            .catch(next);
    }
    item(req, res, next) {
        Watch.findOne({ path: req.params.slug })
            .then((item) => res.json([item]))
            .catch(next);
    }
}

module.exports = new WatchController();
