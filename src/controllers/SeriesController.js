const Series = require('../models/Series');

class SeriesController {
    item(req, res, next) {
        Series.findOne({ name: req.query.name })
            .then((item) => res.json([item]))
            .catch(next);
    }
    title(req, res, next) {
        Series.findOne({ name: req.params.name })
            .then((items) => {
                const array = items.category;
                const item = array.find((e) => e.path === `/${req.query.path}`);
                return res.json(item);
            })
            .catch(next);
    }
}

module.exports = new SeriesController();
